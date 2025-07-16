from django.shortcuts import render ,redirect
from songapp.models import Song

# Create your views here.
from django.shortcuts import render
from django.db.models import Q  # Import Q for OR queries
from songapp.models import Song

def home(request):
    query = request.GET.get('q')
    if query:
        # Filter songs where song name or artist contains the query (case-insensitive)
        st = Song.objects.filter(
            Q(song__icontains=query) | Q(artist__icontains=query)
        )
    else:
        st = Song.objects.all()
    
    return render(request, 'home.html', {'song': st})





def welcome(request):
    return render(request, 'welcome.html')

def addsong(request):
    if request.method == 'POST':
        song_name = request.POST.get('song')
        artist = request.POST.get('artist')
        release = request.POST.get('release')
        views = request.POST.get('views')

        
        if song_name and artist and release and views:
            try:
                views = int(views)
            except ValueError:
                views = 0  
            
            
            new_song = Song(song=song_name, artist=artist, release=release, views=views)
            new_song.save()
            
            return redirect('home')  
        else:
            error = "All fields are required."
            return render(request, 'add_song.html', {'error': error})

    return render(request, 'addsong.html')