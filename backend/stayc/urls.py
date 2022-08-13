from django.urls import path, include
from stayc import views

urlpatterns = [
    path('', views.user_stayc),
    # path('<id>/', views.get_by_video_id),
]