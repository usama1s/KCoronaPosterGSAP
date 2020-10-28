window.onload = function() {
	// let svgDocument = document.getElementById('obj').contentDocument;


	let introText = document.querySelectorAll('.cls-2')
		twopersons = document.querySelectorAll('.cls-47') ,
		twopersonsid = document.getElementById('two_persons') ,
		maskCover = document.querySelectorAll('.cls-3') ,
		maskCoverLines = document.querySelectorAll('.cls-4') ,
		ls5 = document.querySelectorAll('.cls-5') ,
		ls6 = document.querySelectorAll('.cls-6') ,
		bubbles = document.querySelectorAll('.cls-18')  ,
		shirt = document.querySelectorAll('.cls-11') ,
		bus = document.getElementById('buses') ,
		ls29 = document.querySelectorAll('.cls-29') ,
		ls32 = document.querySelectorAll('.cls-32') ,
		wrongEle = document.getElementById('wrong') ,
		correctEle = document.getElementById('correct') ,
		wrongCircle = document.getElementById('wrong_circle'),
		correctCircle = document.getElementById('correct_circle'),
		betweenHouseAndBus = document.getElementById('between_house_and_bus');

	let threadOne = [ls5[0],ls6[0]] ,
		threadTwo = [ls5[1],ls6[1]];

	let textGroup = [...ls29 , ...ls32];


	for (let i = 0; i < introText.length; i++) {
		TweenMax.from(introText[i] , {
			scale:0.3,
			transformOrigin:"50% 50%",
			duration:1 ,
			yoyo:true ,
			repeat:-1,
		});
	}

	TweenMax.to(bubbles , {
			scale:0.3,
			transformOrigin:"50% 50%",
			duration:2 ,
			y:-50,
			opacity:0.3,
			repeat:-1,
	});


	TweenMax.fromTo([maskCover,maskCoverLines] , {
		scale:0.3 ,
		transformOrigin:"50% 50%" ,
	} , {
		duration:1,
		scale:1,
		transformOrigin:"50% 50%" ,
	});


	TweenMax.fromTo(shirt , {
		fill:'#cc0e20',
		transformOrigin:"50% 50%" ,
	} , {
		fill:'#000',
		transformOrigin:"50% 50%" ,
		repeat:-1 ,
		duration:1,
	});


	TweenMax.from(threadOne , {
		x:-1000,
		duration:1.2,
	});

	TweenMax.from(threadTwo , {
		x:1000,
		duration:1.2,
	} );


	TweenMax.to(textGroup , {
			opacity:0.3,
			duration:2 ,
			yoyo:true,
			repeat:-1,
	});


	bus.addEventListener('click' , (e) => {
		TweenMax.to(e.currentTarget , {
			x:600 ,
			duration:2,
		});
	});


	wrongEle.addEventListener('mouseover' , () => {
		TweenMax.to(wrongCircle , {
			scale:1.3,
			transformOrigin:"50% 50%",
			duration:0.5 ,
		});
	});


	wrongEle.addEventListener('mouseout' , () => {
		TweenMax.to(wrongCircle , {
			scale:1,
			transformOrigin:"50% 50%",
			duration:0.5 ,
		});
	});


	correctEle.addEventListener('mouseover' , () => {
		TweenMax.to(correctCircle , {
			scale:1.3,
			transformOrigin:"50% 50%",
			duration:0.5 ,
		});
	});


	correctEle.addEventListener('mouseout' , () => {
		TweenMax.to(correctCircle , {
			scale:1,
			transformOrigin:"50% 50%",
			duration:0.5 ,
		});
	});


	CustomEase.create("custom1", "M0,-0.566,C0.127,-0.184,0.281,1,0.5,1,0.728,1,1,-0.526,1,-0.526")
TweenMax.fromTo(betweenHouseAndBus, {
	duration: 2.5,
	ease: "custom1",
	x: 30, y: 10,repeat:-1
},
{
	duration: 2.5,
	ease: "custom1",
	x: -50, y: 10,repeat:-1
});
    // TweenMax.to(maskCover, 0.8, {rotation:360, transformOrigin:"50% 50%", repeat: -1, yoyo: true});
// TweenMax.from(".st-2-animate", {scrollTrigger:
// 	{
// 		trigger:"#st-2",
// 		start:"top 75%",
// 		end:"bottom 25%",
// 		toggleActions:"restart complete none reset"
// 		}, opacity: 0, x: -2000, scale:0.5});

		for (let i = 0; i < 1; i++) {
			TweenMax.from(twopersons[i] ,2.5 , {scrollTrigger:
				{
					trigger:twopersonsid,
					start:"top 75%",
					end:"bottom 25%",
					toggleActions:"restart complete none reset"
				}, x: 450});
		}
		for (let i = 1; i < 2; i++) {
			TweenMax.from(twopersons[i] ,2.5 , {scrollTrigger:
				{
					trigger:twopersonsid,
					start:"top 75%",
					end:"bottom 25%",
					toggleActions:"restart complete none reset"
				}, x: 325});
		}
		for (let i = 2; i < 3; i++) {
			TweenMax.from(twopersons[i] ,2.5 , {scrollTrigger:
				{
					trigger:twopersonsid,
					start:"top 75%",
					end:"bottom 25%",
					toggleActions:"restart complete none reset"
				}, x: 325});
		}
		for (let i = 3; i < 4; i++) {
			TweenMax.from(twopersons[i] ,2.5 , {scrollTrigger:
				{
					trigger:twopersonsid,
					start:"top 75%",
					end:"bottom 25%",
					toggleActions:"restart complete none reset"
				}, x: 455});
		}
		for (let i = 4; i < 5; i++) {
			TweenMax.from(twopersons[i] ,2.5 , {scrollTrigger:
				{
					trigger:twopersonsid,
					start:"top 75%",
					end:"bottom 25%",
					toggleActions:"restart complete none reset"
				}, x: 455});
		}




		for (let i = 5; i < 6; i++) {
			TweenMax.from(twopersons[i] ,2.5 , {scrollTrigger:
				{
					trigger:twopersonsid,
					start:"top 75%",
					end:"bottom 25%",
					toggleActions:"restart complete none reset"
				}, x: -320});
		}
		for (let i = 6; i < 7; i++) {
			TweenMax.from(twopersons[i] ,2.5 , {scrollTrigger:
				{
					trigger:twopersonsid,
					start:"top 75%",
					end:"bottom 25%",
					toggleActions:"restart complete none reset"
				}, x: -325});
		}
		for (let i = 7; i < 8; i++) {
			TweenMax.from(twopersons[i] ,2.5 , {scrollTrigger:
				{
					trigger:twopersonsid,
					start:"top 75%",
					end:"bottom 25%",
					toggleActions:"restart complete none reset"
				}, x: -205});
		}
		for (let i = 8; i < 9; i++) {
			TweenMax.from(twopersons[i] ,2.5 , {scrollTrigger:
				{
					trigger:twopersonsid,
					start:"top 75%",
					end:"bottom 25%",
					toggleActions:"restart complete none reset"
				}, x: -205});
		}
		for (let i = 9; i < 10; i++) {
			TweenMax.from(twopersons[i] ,2.5 , {scrollTrigger:
				{
					trigger:twopersonsid,
					start:"top 75%",
					end:"bottom 25%",
					toggleActions:"restart complete none reset"
				}, x: -205});
		}


		TweenMax.from(textGroup ,2.5 , {scrollTrigger:
			{
				trigger:twopersonsid,
				start:"top 75%",
				end:"bottom 25%",
				toggleActions:"restart complete none reset"
			},opacity:0});

		// TweenMax.to(textGroup , {
		// 		opacity:0.3,
		// 		duration:2 ,
		// 		yoyo:true,
		// 		repeat:-1,
		// });

		let wrong=document.getElementById("wrong"),
			putYourMask= document.getElementById('Put-your-mask');
		wrong.addEventListener("click", function(){
			 // alert("This is W-2");
			 putYourMask.style.opacity=1;
		 });

}

// const putYourMask= document.getElementById('Put-your-mask');
//
