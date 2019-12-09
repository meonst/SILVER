from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name = 'index'),
    path('<str:herolink>/', views.heroes, name = 'heroes'),
    path('<str:herolink>/talents/', views.talents, name = 'talents'),
    path('<str:herolink>/talents/<str:share>/', views.talentshare, name = 'talentshare'),
    path('image/portrait/<str:imagelink>', views.portraitimage, name = 'portraitimage'),
]