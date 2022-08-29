from django.urls import path, include
from stayc import views

urlpatterns = [
    path('', views.user_stayc),
    path('all/', views.get_all_stayc),
    path('album/', views.user_stayc),
    # path('/StayC_images/')
]