var tl = gsap.timeline();
tl
    .from("#lowest",{
        
        onStart:function(){
            $('#lowest').textillate({
                in:{ effect: 'fadeInUp',
                    callback:function(){
                        $('#lowest').textillate('out')
                    }
             },
                out:{effect: 'fadeOutUp'}
            });
        }
    })
    .from("#second-lowest",{
        opacity: 0,
        delay:0.5,
        onStart:function(){
            $('#second-lowest').textillate({
                in:{ effect: 'fadeInUp',
                    callback:function(){
                        $('#second-lowest').textillate('out')
                    }
             },
                out:{effect: 'fadeOutUp'}
            });
        }
    })
    .from("#second-top",{
        opacity: 0,
        delay:0.5,
        onStart:function(){
            $('#second-top').textillate({
                in:{ effect: 'fadeInUp',
                    callback:function(){
                        $('#second-top').textillate('out')
                    }
             },
                out:{effect: 'fadeOutUp'}
            });
        }
    })
    .from("#top",{
        opacity: 0,
        delay:0.5,
        onStart:function(){
            $('#top').textillate({
                in:{ effect: 'fadeInUp',
                    callback:function(){
                        $('#top').textillate('out')
                    }
             },
                out:{effect: 'fadeOutUp'}
            });
        }
    })
    .to("#top-page",{
        top:"-100%",
        delay:1,
        duration:1.2,
        ease:"Power4.easeOut",

    })
 
    

// gsap.from(".name>h3",{
//     x:"-20",
//     duration:2,
//     color:"white"
// })
// gsap.from(".name h1",{
//     y:"-40",
//     duration:2,
//     color:"red"
// })
// gsap.from(".images img",{
//     x:"80",
//     duration:2,
//     delay:1
    
// })

gsap.from(".about-me h3",{
    scrollTrigger:{
        trigger:".about-me h3",
        scroller:"body",
    
        start:"top 90%",
        end:"bottom 20%",
        scrub:3

    },
    onStart:function(){
        $('.about-me h3').textillate({
            in:{ effect: 'fadeInUp'}
            
        });
    }
    
    
})
gsap.from(".box .sub-about #edu-info",{
    scrollTrigger:{
        trigger:".box .sub-about #edu-info",
        scroller:"body",
        
        start:"top 90%",
        end:"bottom 50%",
        scrub:3

    },
    x:"80",
    duration:2
    
    
})

gsap.from(".about-me .about-info p",{
    scrollTrigger:{
        trigger:".about-me .about-info p",
        scroller:"body",
        
        start:"top 90%",
        end:"bottom 20%",
        

    },
    x:"-20",
    duration:1
    
    
})

gsap.from(".about-me img",{
    scrollTrigger:{
        trigger:".about-me img",
        scroller:"body",
        
        start:"top 80%",
        end:"bottom 20%",
        scrub:3

    },
    scale:1.5,
    duration:2
    
    
})
gsap.from(".tech .tech-items .sub img",{
    scrollTrigger:{
        trigger:".tech .tech-items .sub img",
        scroller:"body",
        
        start:"top 90%",
        end:"bottom 70%",
        scrub:3

    },
    scale:1.5,
    duration:2
    
    
})
