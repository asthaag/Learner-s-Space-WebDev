from django.contrib import admin
from django.urls import path
from auth_app import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', auth_views.register_view, name='register'),
    path('login/', auth_views.login_view, name='login'),
    path('logout/', auth_views.logout_view, name='logout'),
    path('', auth_views.home_view, name='home'),
]
