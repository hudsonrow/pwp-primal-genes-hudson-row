
document.getElementById('contact-btn').addEventListener('click', function(){
    document.getElementById('contact').scrollIntoView({behavior: 'smooth', inline: 'end'});
});

document.getElementById('ourteam-btn').addEventListener('click', function(){
    document.getElementById('ourteam').scrollIntoView({behavior: 'smooth', block: 'start'});
});

document.getElementById('testimonials-btn').addEventListener('click', function(){
    document.getElementById('testimonials').scrollIntoView({behavior: 'smooth', inline: 'start'});
});

document.getElementById('services-btn').addEventListener('click', function(){
    document.getElementById('services').scrollIntoView({behavior: 'smooth', block: 'start'});
});