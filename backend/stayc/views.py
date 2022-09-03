import imp
from tkinter.tix import Form
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

from .models import StayC
from .serializers import StayCSerializer
from staychave.models import StayCHave
from staychave.serializers import StayCHaveSerializer
from staycwant.models import StayCWant
from staycwant.serializers import StayCWantSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_stayc(request):
    stayc = StayC.objects.all()
    serializer = StayCSerializer(stayc, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_stayc(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = StayCSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        albumparam = request.GET.get('album', '').replace("-"," ").title()
        stayc = StayC.objects.filter(album=albumparam)
        serializer = StayCSerializer(stayc, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def stayc_have(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = StayCHaveSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        haveparam = request.GET.get('user')
        staychaves = StayCHave.objects.filter(user=haveparam).values_list('photocard', flat=True)
        staychave = StayC.objects.filter(pk__in=staychaves)
        serializer = StayCSerializer(staychave, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def stayc_want(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = StayCWantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        wantparam = request.GET.get('user')
        staycwants = StayCWant.objects.filter(user=wantparam).values_list('photocard', flat=True)
        staycwant = StayC.objects.filter(pk__in=staycwants)
        serializer = StayCSerializer(staycwant, many=True)
        return Response(serializer.data)