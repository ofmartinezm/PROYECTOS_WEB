਀ 
//Wave slider call ----------------------------------------------------਀樀儀甀攀爀礀⠀搀漀挀甀洀攀渀琀⤀⸀爀攀愀搀礀⠀昀甀渀挀琀椀漀渀⠀⤀ 笀 
	jQuery('.waveshow').nivoSlider({਀ऀऀ攀昀昀攀挀琀㨀✀猀氀椀挀攀䐀漀眀渀✀Ⰰ 
		slices:15,਀ऀऀ愀渀椀洀匀瀀攀攀搀㨀㄀　　　Ⰰ 
		pauseTime:5000,਀ऀऀ搀椀爀攀挀琀椀漀渀一愀瘀㨀琀爀甀攀Ⰰ ⼀⼀一攀砀琀 ☀ 倀爀攀瘀 
		directionNavHide:true, //Only show on hover਀ऀऀ挀漀渀琀爀漀氀一愀瘀㨀昀愀氀猀攀Ⰰ ⼀⼀㄀Ⰰ㈀Ⰰ㌀⸀⸀⸀ 
		keyboardNav:true, //Use left & right arrows਀ऀऀ瀀愀甀猀攀伀渀䠀漀瘀攀爀㨀琀爀甀攀Ⰰ ⼀⼀匀琀漀瀀 愀渀椀洀愀琀椀漀渀 眀栀椀氀攀 栀漀瘀攀爀椀渀最 
		manualAdvance:false, //Force manual transitions਀ऀऀ挀愀瀀琀椀漀渀伀瀀愀挀椀琀礀㨀　⸀㠀Ⰰ ⼀⼀唀渀椀瘀攀爀猀愀氀 挀愀瀀琀椀漀渀 漀瀀愀挀椀琀礀 
		beforeChange: function(){},਀ऀऀ愀昀琀攀爀䌀栀愀渀最攀㨀 昀甀渀挀琀椀漀渀⠀⤀笀紀Ⰰ 
		slideshowEnd: function(){} //Triggers after all slides have been shown਀ऀ紀⤀㬀 
});਀ 
਀ 
//Wave slider function -------------------------------------------------------------਀ 
(function($) {਀ 
	$.fn.nivoSlider = function(options) {਀ 
		//Defaults are below਀ऀऀ瘀愀爀 猀攀琀琀椀渀最猀 㴀 ␀⸀攀砀琀攀渀搀⠀笀紀Ⰰ ␀⸀昀渀⸀渀椀瘀漀匀氀椀搀攀爀⸀搀攀昀愀甀氀琀猀Ⰰ 漀瀀琀椀漀渀猀⤀㬀 
਀ऀऀ爀攀琀甀爀渀 琀栀椀猀⸀攀愀挀栀⠀昀甀渀挀琀椀漀渀⠀⤀ 笀 
			//Useful variables. Play carefully.਀ऀऀऀ瘀愀爀 瘀愀爀猀 㴀 笀 
				currentSlide: 0,਀ऀऀऀऀ挀甀爀爀攀渀琀䤀洀愀最攀㨀 ✀✀Ⰰ 
				totalSlides: 0,਀ऀऀऀऀ爀愀渀搀䄀渀椀洀㨀 ✀✀Ⰰ 
				running: false,਀ऀऀऀऀ瀀愀甀猀攀搀㨀 昀愀氀猀攀Ⰰ 
				stop:false਀ऀऀऀ紀㬀 
		਀ऀऀऀ⼀⼀䜀攀琀 琀栀椀猀 猀氀椀搀攀爀 
			var slider = $(this);਀ऀऀऀ猀氀椀搀攀爀⸀搀愀琀愀⠀✀渀椀瘀漀㨀瘀愀爀猀✀Ⰰ 瘀愀爀猀⤀㬀 
			slider.css('position','relative');਀ऀऀऀ猀氀椀搀攀爀⸀眀椀搀琀栀⠀✀㄀瀀砀✀⤀㬀 
			slider.height('1px');਀ऀऀऀ猀氀椀搀攀爀⸀愀搀搀䌀氀愀猀猀⠀✀渀椀瘀漀匀氀椀搀攀爀✀⤀㬀 
			਀ऀऀऀ⼀⼀䘀椀渀搀 漀甀爀 猀氀椀搀攀爀 挀栀椀氀搀爀攀渀 
			var kids = slider.children();਀ऀऀऀ欀椀搀猀⸀攀愀挀栀⠀昀甀渀挀琀椀漀渀⠀⤀ 笀 
				var child = $(this);਀ऀऀऀऀ椀昀⠀℀挀栀椀氀搀⸀椀猀⠀✀椀洀最✀⤀⤀笀 
					if(child.is('a')){਀ऀऀऀऀऀऀ挀栀椀氀搀⸀愀搀搀䌀氀愀猀猀⠀✀渀椀瘀漀ⴀ椀洀愀最攀䰀椀渀欀✀⤀㬀 
					}਀ऀऀऀऀऀ挀栀椀氀搀 㴀 挀栀椀氀搀⸀昀椀渀搀⠀✀椀洀最㨀昀椀爀猀琀✀⤀㬀 
				}਀ऀऀऀऀ⼀⼀䐀漀渀✀琀 愀猀欀 
				var childWidth = child.width();਀ऀऀऀऀ椀昀⠀挀栀椀氀搀圀椀搀琀栀 㴀㴀 　⤀ 挀栀椀氀搀圀椀搀琀栀 㴀 挀栀椀氀搀⸀愀琀琀爀⠀✀眀椀搀琀栀✀⤀㬀 
				var childHeight = child.height();਀ऀऀऀऀ椀昀⠀挀栀椀氀搀䠀攀椀最栀琀 㴀㴀 　⤀ 挀栀椀氀搀䠀攀椀最栀琀 㴀 挀栀椀氀搀⸀愀琀琀爀⠀✀栀攀椀最栀琀✀⤀㬀 
				//Resize the slider਀ऀऀऀऀ椀昀⠀挀栀椀氀搀圀椀搀琀栀 㸀 猀氀椀搀攀爀⸀眀椀搀琀栀⠀⤀⤀笀 
					slider.width(childWidth);਀ऀऀऀऀ紀 
				if(childHeight > slider.height()){਀ऀऀऀऀऀ猀氀椀搀攀爀⸀栀攀椀最栀琀⠀挀栀椀氀搀䠀攀椀最栀琀⤀㬀 
				}਀ऀऀऀऀ挀栀椀氀搀⸀挀猀猀⠀✀搀椀猀瀀氀愀礀✀Ⰰ✀渀漀渀攀✀⤀㬀 
				vars.totalSlides++;਀ऀऀऀ紀⤀㬀 
			਀ऀऀऀ⼀⼀䜀攀琀 椀渀椀琀椀愀氀 椀洀愀最攀 
			if($(kids[vars.currentSlide]).is('img')){਀ऀऀऀऀ瘀愀爀猀⸀挀甀爀爀攀渀琀䤀洀愀最攀 㴀 ␀⠀欀椀搀猀嬀瘀愀爀猀⸀挀甀爀爀攀渀琀匀氀椀搀攀崀⤀㬀 
			} else {਀ऀऀऀऀ瘀愀爀猀⸀挀甀爀爀攀渀琀䤀洀愀最攀 㴀 ␀⠀欀椀搀猀嬀瘀愀爀猀⸀挀甀爀爀攀渀琀匀氀椀搀攀崀⤀⸀昀椀渀搀⠀✀椀洀最㨀昀椀爀猀琀✀⤀㬀 
			}਀ऀऀऀ 
			//Show initial link਀ऀऀऀ椀昀⠀␀⠀欀椀搀猀嬀瘀愀爀猀⸀挀甀爀爀攀渀琀匀氀椀搀攀崀⤀⸀椀猀⠀✀愀✀⤀⤀笀 
				$(kids[vars.currentSlide]).css('display','block');਀ऀऀऀ紀 
			਀ऀऀऀ⼀⼀匀攀琀 昀椀爀猀琀 戀愀挀欀最爀漀甀渀搀 
			slider.css('background','url('+ vars.currentImage.attr('src') +') no-repeat');਀ऀऀऀ 
			//Add initial slices਀ऀऀऀ昀漀爀⠀瘀愀爀 椀 㴀 　㬀 椀 㰀 猀攀琀琀椀渀最猀⸀猀氀椀挀攀猀㬀 椀⬀⬀⤀笀 
				var sliceWidth = Math.round(slider.width()/settings.slices);਀ऀऀऀऀ椀昀⠀椀 㴀㴀 猀攀琀琀椀渀最猀⸀猀氀椀挀攀猀ⴀ㄀⤀笀 
					slider.append(਀ऀऀऀऀऀऀ␀⠀✀㰀搀椀瘀 挀氀愀猀猀㴀∀渀椀瘀漀ⴀ猀氀椀挀攀∀㸀㰀⼀搀椀瘀㸀✀⤀⸀挀猀猀⠀笀 氀攀昀琀㨀⠀猀氀椀挀攀圀椀搀琀栀⨀椀⤀⬀✀瀀砀✀Ⰰ 眀椀搀琀栀㨀⠀猀氀椀搀攀爀⸀眀椀搀琀栀⠀⤀ⴀ⠀猀氀椀挀攀圀椀搀琀栀⨀椀⤀⤀⬀✀瀀砀✀ 紀⤀ 
					);਀ऀऀऀऀ紀 攀氀猀攀 笀 
					slider.append(਀ऀऀऀऀऀऀ␀⠀✀㰀搀椀瘀 挀氀愀猀猀㴀∀渀椀瘀漀ⴀ猀氀椀挀攀∀㸀㰀⼀搀椀瘀㸀✀⤀⸀挀猀猀⠀笀 氀攀昀琀㨀⠀猀氀椀挀攀圀椀搀琀栀⨀椀⤀⬀✀瀀砀✀Ⰰ 眀椀搀琀栀㨀猀氀椀挀攀圀椀搀琀栀⬀✀瀀砀✀ 紀⤀ 
					);਀ऀऀऀऀ紀 
			}਀ऀऀऀ 
			//Create caption਀ऀऀऀ猀氀椀搀攀爀⸀愀瀀瀀攀渀搀⠀ 
				$('<div class="nivo-caption"><p></p></div>').css({ display:'none', opacity:settings.captionOpacity })਀ऀऀऀ⤀㬀ऀऀऀ 
			//Process initial  caption਀ऀऀऀ椀昀⠀瘀愀爀猀⸀挀甀爀爀攀渀琀䤀洀愀最攀⸀愀琀琀爀⠀✀琀椀琀氀攀✀⤀ ℀㴀 ✀✀⤀笀 
				$('.nivo-caption p', slider).html(vars.currentImage.attr('title'));					਀ऀऀऀऀ␀⠀✀⸀渀椀瘀漀ⴀ挀愀瀀琀椀漀渀✀Ⰰ 猀氀椀搀攀爀⤀⸀昀愀搀攀䤀渀⠀猀攀琀琀椀渀最猀⸀愀渀椀洀匀瀀攀攀搀⤀㬀 
			}਀ऀऀऀ 
			//In the words of Super Mario "let's a go!"਀ऀऀऀ瘀愀爀 琀椀洀攀爀 㴀 　㬀 
			if(!settings.manualAdvance){਀ऀऀऀऀ琀椀洀攀爀 㴀 猀攀琀䤀渀琀攀爀瘀愀氀⠀昀甀渀挀琀椀漀渀⠀⤀笀 渀椀瘀漀刀甀渀⠀猀氀椀搀攀爀Ⰰ 欀椀搀猀Ⰰ 猀攀琀琀椀渀最猀Ⰰ 昀愀氀猀攀⤀㬀 紀Ⰰ 猀攀琀琀椀渀最猀⸀瀀愀甀猀攀吀椀洀攀⤀㬀 
			}਀ 
			//Add Direction nav਀ऀऀऀ椀昀⠀猀攀琀琀椀渀最猀⸀搀椀爀攀挀琀椀漀渀一愀瘀⤀笀 
				slider.append('<div class="nivo-directionNav"><a class="nivo-prevNav">Prev</a><a class="nivo-nextNav">Next</a></div>');਀ऀऀऀऀ 
				//Hide Direction nav਀ऀऀऀऀ椀昀⠀猀攀琀琀椀渀最猀⸀搀椀爀攀挀琀椀漀渀一愀瘀䠀椀搀攀⤀笀 
					$('.nivo-directionNav', slider).hide();਀ऀऀऀऀऀ猀氀椀搀攀爀⸀栀漀瘀攀爀⠀昀甀渀挀琀椀漀渀⠀⤀笀 
						$('.nivo-directionNav', slider).show();਀ऀऀऀऀऀ紀Ⰰ 昀甀渀挀琀椀漀渀⠀⤀笀 
						$('.nivo-directionNav', slider).hide();਀ऀऀऀऀऀ紀⤀㬀 
				}਀ऀऀऀऀ 
				$('a.nivo-prevNav', slider).live('click', function(){਀ऀऀऀऀऀ椀昀⠀瘀愀爀猀⸀爀甀渀渀椀渀最⤀ 爀攀琀甀爀渀 昀愀氀猀攀㬀 
					clearInterval(timer);਀ऀऀऀऀऀ琀椀洀攀爀 㴀 ✀✀㬀 
					vars.currentSlide-=2;਀ऀऀऀऀऀ渀椀瘀漀刀甀渀⠀猀氀椀搀攀爀Ⰰ 欀椀搀猀Ⰰ 猀攀琀琀椀渀最猀Ⰰ ✀瀀爀攀瘀✀⤀㬀 
				});਀ऀऀऀऀ 
				$('a.nivo-nextNav', slider).live('click', function(){਀ऀऀऀऀऀ椀昀⠀瘀愀爀猀⸀爀甀渀渀椀渀最⤀ 爀攀琀甀爀渀 昀愀氀猀攀㬀 
					clearInterval(timer);਀ऀऀऀऀऀ琀椀洀攀爀 㴀 ✀✀㬀 
					nivoRun(slider, kids, settings, 'next');਀ऀऀऀऀ紀⤀㬀 
			}਀ऀऀऀ 
			//Add Control nav਀ऀऀऀ椀昀⠀猀攀琀琀椀渀最猀⸀挀漀渀琀爀漀氀一愀瘀⤀笀 
				var nivoControl = $('<div class="nivo-controlNav"></div>');਀ऀऀऀऀ猀氀椀搀攀爀⸀愀瀀瀀攀渀搀⠀渀椀瘀漀䌀漀渀琀爀漀氀⤀㬀 
				for(var i = 0; i < kids.length; i++){਀ऀऀऀऀऀ渀椀瘀漀䌀漀渀琀爀漀氀⸀愀瀀瀀攀渀搀⠀✀㰀愀 挀氀愀猀猀㴀∀渀椀瘀漀ⴀ挀漀渀琀爀漀氀∀ 爀攀氀㴀∀✀⬀ 椀 ⬀✀∀㸀✀⬀ ⠀椀 ⬀ ㄀⤀ ⬀✀㰀⼀愀㸀✀⤀㬀 
				}਀ऀऀऀऀ⼀⼀匀攀琀 椀渀椀琀椀愀氀 愀挀琀椀瘀攀 氀椀渀欀 
				$('.nivo-controlNav a:eq('+ vars.currentSlide +')', slider).addClass('active');਀ऀऀऀऀ 
				$('.nivo-controlNav a', slider).live('click', function(){਀ऀऀऀऀऀ椀昀⠀瘀愀爀猀⸀爀甀渀渀椀渀最⤀ 爀攀琀甀爀渀 昀愀氀猀攀㬀 
					if($(this).hasClass('active')) return false;਀ऀऀऀऀऀ挀氀攀愀爀䤀渀琀攀爀瘀愀氀⠀琀椀洀攀爀⤀㬀 
					timer = '';਀ऀऀऀऀऀ猀氀椀搀攀爀⸀挀猀猀⠀✀戀愀挀欀最爀漀甀渀搀✀Ⰰ✀甀爀氀⠀✀⬀ 瘀愀爀猀⸀挀甀爀爀攀渀琀䤀洀愀最攀⸀愀琀琀爀⠀✀猀爀挀✀⤀ ⬀✀⤀ 渀漀ⴀ爀攀瀀攀愀琀✀⤀㬀 
					vars.currentSlide = $(this).attr('rel') - 1;਀ऀऀऀऀऀ渀椀瘀漀刀甀渀⠀猀氀椀搀攀爀Ⰰ 欀椀搀猀Ⰰ 猀攀琀琀椀渀最猀Ⰰ ✀挀漀渀琀爀漀氀✀⤀㬀 
				});਀ऀऀऀ紀 
			਀ऀऀऀ⼀⼀䬀攀礀戀漀愀爀搀 一愀瘀椀最愀琀椀漀渀 
			if(settings.keyboardNav){਀ऀऀऀऀ␀⠀眀椀渀搀漀眀⤀⸀欀攀礀瀀爀攀猀猀⠀昀甀渀挀琀椀漀渀⠀攀瘀攀渀琀⤀笀 
					//Left਀ऀऀऀऀऀ椀昀⠀攀瘀攀渀琀⸀欀攀礀䌀漀搀攀 㴀㴀 ✀㌀㜀✀⤀笀 
						if(vars.running) return false;਀ऀऀऀऀऀऀ挀氀攀愀爀䤀渀琀攀爀瘀愀氀⠀琀椀洀攀爀⤀㬀 
						timer = '';਀ऀऀऀऀऀऀ瘀愀爀猀⸀挀甀爀爀攀渀琀匀氀椀搀攀ⴀ㴀㈀㬀 
						nivoRun(slider, kids, settings, 'prev');਀ऀऀऀऀऀ紀 
					//Right਀ऀऀऀऀऀ椀昀⠀攀瘀攀渀琀⸀欀攀礀䌀漀搀攀 㴀㴀 ✀㌀㤀✀⤀笀 
						if(vars.running) return false;਀ऀऀऀऀऀऀ挀氀攀愀爀䤀渀琀攀爀瘀愀氀⠀琀椀洀攀爀⤀㬀 
						timer = '';਀ऀऀऀऀऀऀ渀椀瘀漀刀甀渀⠀猀氀椀搀攀爀Ⰰ 欀椀搀猀Ⰰ 猀攀琀琀椀渀最猀Ⰰ ✀渀攀砀琀✀⤀㬀 
					}਀ऀऀऀऀ紀⤀㬀 
			}਀ऀऀऀ 
			//For pauseOnHover setting਀ऀऀऀ椀昀⠀猀攀琀琀椀渀最猀⸀瀀愀甀猀攀伀渀䠀漀瘀攀爀⤀笀 
				slider.hover(function(){਀ऀऀऀऀऀ瘀愀爀猀⸀瀀愀甀猀攀搀 㴀 琀爀甀攀㬀 
					clearInterval(timer);਀ऀऀऀऀऀ琀椀洀攀爀 㴀 ✀✀㬀 
				}, function(){਀ऀऀऀऀऀ瘀愀爀猀⸀瀀愀甀猀攀搀 㴀 昀愀氀猀攀㬀 
					//Restart the timer਀ऀऀऀऀऀ椀昀⠀琀椀洀攀爀 㴀㴀 ✀✀ ☀☀ ℀猀攀琀琀椀渀最猀⸀洀愀渀甀愀氀䄀搀瘀愀渀挀攀⤀笀 
						timer = setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);਀ऀऀऀऀऀ紀 
				});਀ऀऀऀ紀 
			਀ऀऀऀ⼀⼀䔀瘀攀渀琀 眀栀攀渀 䄀渀椀洀愀琀椀漀渀 昀椀渀椀猀栀攀猀 
			slider.bind('nivo:animFinished', function(){ ਀ऀऀऀऀ瘀愀爀猀⸀爀甀渀渀椀渀最 㴀 昀愀氀猀攀㬀  
				//Hide child links਀ऀऀऀऀ␀⠀欀椀搀猀⤀⸀攀愀挀栀⠀昀甀渀挀琀椀漀渀⠀⤀笀 
					if($(this).is('a')){਀ऀऀऀऀऀऀ␀⠀琀栀椀猀⤀⸀挀猀猀⠀✀搀椀猀瀀氀愀礀✀Ⰰ✀渀漀渀攀✀⤀㬀 
					}਀ऀऀऀऀ紀⤀㬀 
				//Show current link਀ऀऀऀऀ椀昀⠀␀⠀欀椀搀猀嬀瘀愀爀猀⸀挀甀爀爀攀渀琀匀氀椀搀攀崀⤀⸀椀猀⠀✀愀✀⤀⤀笀 
					$(kids[vars.currentSlide]).css('display','block');਀ऀऀऀऀ紀 
				//Restart the timer਀ऀऀऀऀ椀昀⠀琀椀洀攀爀 㴀㴀 ✀✀ ☀☀ ℀瘀愀爀猀⸀瀀愀甀猀攀搀 ☀☀ ℀猀攀琀琀椀渀最猀⸀洀愀渀甀愀氀䄀搀瘀愀渀挀攀⤀笀 
					timer = setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);਀ऀऀऀऀ紀 
				//Trigger the afterChange callback਀ऀऀऀऀ猀攀琀琀椀渀最猀⸀愀昀琀攀爀䌀栀愀渀最攀⸀挀愀氀氀⠀琀栀椀猀⤀㬀 
			});਀ऀऀ紀⤀㬀 
		਀ऀऀ昀甀渀挀琀椀漀渀 渀椀瘀漀刀甀渀⠀猀氀椀搀攀爀Ⰰ 欀椀搀猀Ⰰ 猀攀琀琀椀渀最猀Ⰰ 渀甀搀最攀⤀笀 
			//Get our vars਀ऀऀऀ瘀愀爀 瘀愀爀猀 㴀 猀氀椀搀攀爀⸀搀愀琀愀⠀✀渀椀瘀漀㨀瘀愀爀猀✀⤀㬀 
			if(vars.stop) return false;਀ऀऀऀ 
			//Trigger the beforeChange callback਀ऀऀऀ猀攀琀琀椀渀最猀⸀戀攀昀漀爀攀䌀栀愀渀最攀⸀挀愀氀氀⠀琀栀椀猀⤀㬀 
					਀ऀऀऀ⼀⼀匀攀琀 挀甀爀爀攀渀琀 戀愀挀欀最爀漀甀渀搀 戀攀昀漀爀攀 挀栀愀渀最攀 
			if(!nudge){਀ऀऀऀऀ猀氀椀搀攀爀⸀挀猀猀⠀✀戀愀挀欀最爀漀甀渀搀✀Ⰰ✀甀爀氀⠀✀⬀ 瘀愀爀猀⸀挀甀爀爀攀渀琀䤀洀愀最攀⸀愀琀琀爀⠀✀猀爀挀✀⤀ ⬀✀⤀ 渀漀ⴀ爀攀瀀攀愀琀✀⤀㬀 
			} else {਀ऀऀऀऀ椀昀⠀渀甀搀最攀 㴀㴀 ✀瀀爀攀瘀✀⤀笀 
					slider.css('background','url('+ vars.currentImage.attr('src') +') no-repeat');਀ऀऀऀऀ紀 
				if(nudge == 'next'){਀ऀऀऀऀऀ猀氀椀搀攀爀⸀挀猀猀⠀✀戀愀挀欀最爀漀甀渀搀✀Ⰰ✀甀爀氀⠀✀⬀ 瘀愀爀猀⸀挀甀爀爀攀渀琀䤀洀愀最攀⸀愀琀琀爀⠀✀猀爀挀✀⤀ ⬀✀⤀ 渀漀ⴀ爀攀瀀攀愀琀✀⤀㬀 
				}਀ऀऀऀ紀 
			vars.currentSlide++;਀ऀऀऀ椀昀⠀瘀愀爀猀⸀挀甀爀爀攀渀琀匀氀椀搀攀 㴀㴀 瘀愀爀猀⸀琀漀琀愀氀匀氀椀搀攀猀⤀笀  
				vars.currentSlide = 0;਀ऀऀऀऀ⼀⼀吀爀椀最最攀爀 琀栀攀 猀氀椀搀攀猀栀漀眀䔀渀搀 挀愀氀氀戀愀挀欀 
				settings.slideshowEnd.call(this);਀ऀऀऀ紀 
			if(vars.currentSlide < 0) vars.currentSlide = (vars.totalSlides - 1);਀ऀऀऀ⼀⼀匀攀琀 瘀愀爀猀⸀挀甀爀爀攀渀琀䤀洀愀最攀 
			if($(kids[vars.currentSlide]).is('img')){਀ऀऀऀऀ瘀愀爀猀⸀挀甀爀爀攀渀琀䤀洀愀最攀 㴀 ␀⠀欀椀搀猀嬀瘀愀爀猀⸀挀甀爀爀攀渀琀匀氀椀搀攀崀⤀㬀 
			} else {਀ऀऀऀऀ瘀愀爀猀⸀挀甀爀爀攀渀琀䤀洀愀最攀 㴀 ␀⠀欀椀搀猀嬀瘀愀爀猀⸀挀甀爀爀攀渀琀匀氀椀搀攀崀⤀⸀昀椀渀搀⠀✀椀洀最㨀昀椀爀猀琀✀⤀㬀 
			}਀ऀऀऀ 
			//Set acitve links਀ऀऀऀ椀昀⠀猀攀琀琀椀渀最猀⸀挀漀渀琀爀漀氀一愀瘀⤀笀 
				$('.nivo-controlNav a', slider).removeClass('active');਀ऀऀऀऀ␀⠀✀⸀渀椀瘀漀ⴀ挀漀渀琀爀漀氀一愀瘀 愀㨀攀焀⠀✀⬀ 瘀愀爀猀⸀挀甀爀爀攀渀琀匀氀椀搀攀 ⬀✀⤀✀Ⰰ 猀氀椀搀攀爀⤀⸀愀搀搀䌀氀愀猀猀⠀✀愀挀琀椀瘀攀✀⤀㬀 
			}਀ऀऀऀ 
			//Process caption਀ऀऀऀ椀昀⠀瘀愀爀猀⸀挀甀爀爀攀渀琀䤀洀愀最攀⸀愀琀琀爀⠀✀琀椀琀氀攀✀⤀ ℀㴀 ✀✀⤀笀 
				if($('.nivo-caption', slider).css('display') == 'block'){਀ऀऀऀऀऀ␀⠀✀⸀渀椀瘀漀ⴀ挀愀瀀琀椀漀渀 瀀✀Ⰰ 猀氀椀搀攀爀⤀⸀昀愀搀攀伀甀琀⠀猀攀琀琀椀渀最猀⸀愀渀椀洀匀瀀攀攀搀Ⰰ 昀甀渀挀琀椀漀渀⠀⤀笀 
						$(this).html(vars.currentImage.attr('title'));਀ऀऀऀऀऀऀ␀⠀琀栀椀猀⤀⸀昀愀搀攀䤀渀⠀猀攀琀琀椀渀最猀⸀愀渀椀洀匀瀀攀攀搀⤀㬀 
					});਀ऀऀऀऀ紀 攀氀猀攀 笀 
					$('.nivo-caption p', slider).html(vars.currentImage.attr('title'));਀ऀऀऀऀ紀ऀऀऀऀऀ 
				$('.nivo-caption', slider).fadeIn(settings.animSpeed);਀ऀऀऀ紀 攀氀猀攀 笀 
				$('.nivo-caption', slider).fadeOut(settings.animSpeed);਀ऀऀऀ紀 
			਀ऀऀऀ⼀⼀匀攀琀 渀攀眀 猀氀椀挀攀 戀愀挀欀最爀漀甀渀搀猀 
			var  i = 0;਀ऀऀऀ␀⠀✀⸀渀椀瘀漀ⴀ猀氀椀挀攀✀Ⰰ 猀氀椀搀攀爀⤀⸀攀愀挀栀⠀昀甀渀挀琀椀漀渀⠀⤀笀 
				var sliceWidth = Math.round(slider.width()/settings.slices);਀ऀऀऀऀ␀⠀琀栀椀猀⤀⸀挀猀猀⠀笀 栀攀椀最栀琀㨀✀　瀀砀✀Ⰰ 漀瀀愀挀椀琀礀㨀✀　✀Ⰰ  
					background: 'url('+ vars.currentImage.attr('src') +') no-repeat -'+ ((sliceWidth + (i * sliceWidth)) - sliceWidth) +'px 0%' });਀ऀऀऀऀ椀⬀⬀㬀 
			});਀ऀऀऀ 
			if(settings.effect == 'random'){਀ऀऀऀऀ瘀愀爀 愀渀椀洀猀 㴀 渀攀眀 䄀爀爀愀礀⠀∀猀氀椀挀攀䐀漀眀渀刀椀最栀琀∀Ⰰ∀猀氀椀挀攀䐀漀眀渀䰀攀昀琀∀Ⰰ∀猀氀椀挀攀唀瀀刀椀最栀琀∀Ⰰ∀猀氀椀挀攀唀瀀䰀攀昀琀∀Ⰰ∀猀氀椀挀攀唀瀀䐀漀眀渀∀Ⰰ∀猀氀椀挀攀唀瀀䐀漀眀渀䰀攀昀琀∀Ⰰ∀昀漀氀搀∀Ⰰ∀昀愀搀攀∀⤀㬀 
				vars.randAnim = anims[Math.floor(Math.random()*(anims.length + 1))];਀ऀऀऀऀ椀昀⠀瘀愀爀猀⸀爀愀渀搀䄀渀椀洀 㴀㴀 甀渀搀攀昀椀渀攀搀⤀ 瘀愀爀猀⸀爀愀渀搀䄀渀椀洀 㴀 ✀昀愀搀攀✀㬀 
			}਀ऀऀ 
			//Run effects਀ऀऀऀ瘀愀爀猀⸀爀甀渀渀椀渀最 㴀 琀爀甀攀㬀 
			if(settings.effect == 'sliceDown' || settings.effect == 'sliceDownRight' || vars.randAnim == 'sliceDownRight' ||਀ऀऀऀऀ猀攀琀琀椀渀最猀⸀攀昀昀攀挀琀 㴀㴀 ✀猀氀椀挀攀䐀漀眀渀䰀攀昀琀✀ 簀簀 瘀愀爀猀⸀爀愀渀搀䄀渀椀洀 㴀㴀 ✀猀氀椀挀攀䐀漀眀渀䰀攀昀琀✀⤀笀 
				var timeBuff = 0;਀ऀऀऀऀ瘀愀爀 椀 㴀 　㬀 
				var slices = $('.nivo-slice', slider);਀ऀऀऀऀ椀昀⠀猀攀琀琀椀渀最猀⸀攀昀昀攀挀琀 㴀㴀 ✀猀氀椀挀攀䐀漀眀渀䰀攀昀琀✀ 簀簀 瘀愀爀猀⸀爀愀渀搀䄀渀椀洀 㴀㴀 ✀猀氀椀挀攀䐀漀眀渀䰀攀昀琀✀⤀ 猀氀椀挀攀猀 㴀 ␀⠀✀⸀渀椀瘀漀ⴀ猀氀椀挀攀✀Ⰰ 猀氀椀搀攀爀⤀⸀爀攀瘀攀爀猀攀⠀⤀㬀 
				slices.each(function(){਀ऀऀऀऀऀ瘀愀爀 猀氀椀挀攀 㴀 ␀⠀琀栀椀猀⤀㬀 
					slice.css('top','0px');਀ऀऀऀऀऀ椀昀⠀椀 㴀㴀 猀攀琀琀椀渀最猀⸀猀氀椀挀攀猀ⴀ㄀⤀笀 
						setTimeout(function(){਀ऀऀऀऀऀऀऀ猀氀椀挀攀⸀愀渀椀洀愀琀攀⠀笀 栀攀椀最栀琀㨀✀㄀　　─✀Ⰰ 漀瀀愀挀椀琀礀㨀✀㄀⸀　✀ 紀Ⰰ 猀攀琀琀椀渀最猀⸀愀渀椀洀匀瀀攀攀搀Ⰰ ✀✀Ⰰ 昀甀渀挀琀椀漀渀⠀⤀笀 猀氀椀搀攀爀⸀琀爀椀最最攀爀⠀✀渀椀瘀漀㨀愀渀椀洀䘀椀渀椀猀栀攀搀✀⤀㬀 紀⤀㬀 
						}, (100 + timeBuff));਀ऀऀऀऀऀ紀 攀氀猀攀 笀 
						setTimeout(function(){਀ऀऀऀऀऀऀऀ猀氀椀挀攀⸀愀渀椀洀愀琀攀⠀笀 栀攀椀最栀琀㨀✀㄀　　─✀Ⰰ 漀瀀愀挀椀琀礀㨀✀㄀⸀　✀ 紀Ⰰ 猀攀琀琀椀渀最猀⸀愀渀椀洀匀瀀攀攀搀⤀㬀 
						}, (100 + timeBuff));਀ऀऀऀऀऀ紀 
					timeBuff += 50;਀ऀऀऀऀऀ椀⬀⬀㬀 
				});਀ऀऀऀ紀  
			else if(settings.effect == 'sliceUp' || settings.effect == 'sliceUpRight' || vars.randAnim == 'sliceUpRight' ||਀ऀऀऀऀऀ猀攀琀琀椀渀最猀⸀攀昀昀攀挀琀 㴀㴀 ✀猀氀椀挀攀唀瀀䰀攀昀琀✀ 簀簀 瘀愀爀猀⸀爀愀渀搀䄀渀椀洀 㴀㴀 ✀猀氀椀挀攀唀瀀䰀攀昀琀✀⤀笀 
				var timeBuff = 0;਀ऀऀऀऀ瘀愀爀 椀 㴀 　㬀 
				var slices = $('.nivo-slice', slider);਀ऀऀऀऀ椀昀⠀猀攀琀琀椀渀最猀⸀攀昀昀攀挀琀 㴀㴀 ✀猀氀椀挀攀唀瀀䰀攀昀琀✀ 簀簀 瘀愀爀猀⸀爀愀渀搀䄀渀椀洀 㴀㴀 ✀猀氀椀挀攀唀瀀䰀攀昀琀✀⤀ 猀氀椀挀攀猀 㴀 ␀⠀✀⸀渀椀瘀漀ⴀ猀氀椀挀攀✀Ⰰ 猀氀椀搀攀爀⤀⸀爀攀瘀攀爀猀攀⠀⤀㬀 
				slices.each(function(){਀ऀऀऀऀऀ瘀愀爀 猀氀椀挀攀 㴀 ␀⠀琀栀椀猀⤀㬀 
					slice.css('bottom','0px');਀ऀऀऀऀऀ椀昀⠀椀 㴀㴀 猀攀琀琀椀渀最猀⸀猀氀椀挀攀猀ⴀ㄀⤀笀 
						setTimeout(function(){਀ऀऀऀऀऀऀऀ猀氀椀挀攀⸀愀渀椀洀愀琀攀⠀笀 栀攀椀最栀琀㨀✀㄀　　─✀Ⰰ 漀瀀愀挀椀琀礀㨀✀㄀⸀　✀ 紀Ⰰ 猀攀琀琀椀渀最猀⸀愀渀椀洀匀瀀攀攀搀Ⰰ ✀✀Ⰰ 昀甀渀挀琀椀漀渀⠀⤀笀 猀氀椀搀攀爀⸀琀爀椀最最攀爀⠀✀渀椀瘀漀㨀愀渀椀洀䘀椀渀椀猀栀攀搀✀⤀㬀 紀⤀㬀 
						}, (100 + timeBuff));਀ऀऀऀऀऀ紀 攀氀猀攀 笀 
						setTimeout(function(){਀ऀऀऀऀऀऀऀ猀氀椀挀攀⸀愀渀椀洀愀琀攀⠀笀 栀攀椀最栀琀㨀✀㄀　　─✀Ⰰ 漀瀀愀挀椀琀礀㨀✀㄀⸀　✀ 紀Ⰰ 猀攀琀琀椀渀最猀⸀愀渀椀洀匀瀀攀攀搀⤀㬀 
						}, (100 + timeBuff));਀ऀऀऀऀऀ紀 
					timeBuff += 50;਀ऀऀऀऀऀ椀⬀⬀㬀 
				});਀ऀऀऀ紀  
			else if(settings.effect == 'sliceUpDown' || settings.effect == 'sliceUpDownRight' || vars.randAnim == 'sliceUpDown' || ਀ऀऀऀऀऀ猀攀琀琀椀渀最猀⸀攀昀昀攀挀琀 㴀㴀 ✀猀氀椀挀攀唀瀀䐀漀眀渀䰀攀昀琀✀ 簀簀 瘀愀爀猀⸀爀愀渀搀䄀渀椀洀 㴀㴀 ✀猀氀椀挀攀唀瀀䐀漀眀渀䰀攀昀琀✀⤀笀 
				var timeBuff = 0;਀ऀऀऀऀ瘀愀爀 椀 㴀 　㬀 
				var v = 0;਀ऀऀऀऀ瘀愀爀 猀氀椀挀攀猀 㴀 ␀⠀✀⸀渀椀瘀漀ⴀ猀氀椀挀攀✀Ⰰ 猀氀椀搀攀爀⤀㬀 
				if(settings.effect == 'sliceUpDownLeft' || vars.randAnim == 'sliceUpDownLeft') slices = $('.nivo-slice', slider).reverse();਀ऀऀऀऀ猀氀椀挀攀猀⸀攀愀挀栀⠀昀甀渀挀琀椀漀渀⠀⤀笀 
					var slice = $(this);਀ऀऀऀऀऀ椀昀⠀椀 㴀㴀 　⤀笀 
						slice.css('top','0px');਀ऀऀऀऀऀऀ椀⬀⬀㬀 
					} else {਀ऀऀऀऀऀऀ猀氀椀挀攀⸀挀猀猀⠀✀戀漀琀琀漀洀✀Ⰰ✀　瀀砀✀⤀㬀 
						i = 0;਀ऀऀऀऀऀ紀 
					਀ऀऀऀऀऀ椀昀⠀瘀 㴀㴀 猀攀琀琀椀渀最猀⸀猀氀椀挀攀猀ⴀ㄀⤀笀 
						setTimeout(function(){਀ऀऀऀऀऀऀऀ猀氀椀挀攀⸀愀渀椀洀愀琀攀⠀笀 栀攀椀最栀琀㨀✀㄀　　─✀Ⰰ 漀瀀愀挀椀琀礀㨀✀㄀⸀　✀ 紀Ⰰ 猀攀琀琀椀渀最猀⸀愀渀椀洀匀瀀攀攀搀Ⰰ ✀✀Ⰰ 昀甀渀挀琀椀漀渀⠀⤀笀 猀氀椀搀攀爀⸀琀爀椀最最攀爀⠀✀渀椀瘀漀㨀愀渀椀洀䘀椀渀椀猀栀攀搀✀⤀㬀 紀⤀㬀 
						}, (100 + timeBuff));਀ऀऀऀऀऀ紀 攀氀猀攀 笀 
						setTimeout(function(){਀ऀऀऀऀऀऀऀ猀氀椀挀攀⸀愀渀椀洀愀琀攀⠀笀 栀攀椀最栀琀㨀✀㄀　　─✀Ⰰ 漀瀀愀挀椀琀礀㨀✀㄀⸀　✀ 紀Ⰰ 猀攀琀琀椀渀最猀⸀愀渀椀洀匀瀀攀攀搀⤀㬀 
						}, (100 + timeBuff));਀ऀऀऀऀऀ紀 
					timeBuff += 50;਀ऀऀऀऀऀ瘀⬀⬀㬀 
				});਀ऀऀऀ紀  
			else if(settings.effect == 'fold' || vars.randAnim == 'fold'){਀ऀऀऀऀ瘀愀爀 琀椀洀攀䈀甀昀昀 㴀 　㬀 
				var i = 0;਀ऀऀऀऀ␀⠀✀⸀渀椀瘀漀ⴀ猀氀椀挀攀✀Ⰰ 猀氀椀搀攀爀⤀⸀攀愀挀栀⠀昀甀渀挀琀椀漀渀⠀⤀笀 
					var slice = $(this);਀ऀऀऀऀऀ瘀愀爀 漀爀椀最圀椀搀琀栀 㴀 猀氀椀挀攀⸀眀椀搀琀栀⠀⤀㬀 
					slice.css({ top:'0px', height:'100%', width:'0px' });਀ऀऀऀऀऀ椀昀⠀椀 㴀㴀 猀攀琀琀椀渀最猀⸀猀氀椀挀攀猀ⴀ㄀⤀笀 
						setTimeout(function(){਀ऀऀऀऀऀऀऀ猀氀椀挀攀⸀愀渀椀洀愀琀攀⠀笀 眀椀搀琀栀㨀漀爀椀最圀椀搀琀栀Ⰰ 漀瀀愀挀椀琀礀㨀✀㄀⸀　✀ 紀Ⰰ 猀攀琀琀椀渀最猀⸀愀渀椀洀匀瀀攀攀搀Ⰰ ✀✀Ⰰ 昀甀渀挀琀椀漀渀⠀⤀笀 猀氀椀搀攀爀⸀琀爀椀最最攀爀⠀✀渀椀瘀漀㨀愀渀椀洀䘀椀渀椀猀栀攀搀✀⤀㬀 紀⤀㬀 
						}, (100 + timeBuff));਀ऀऀऀऀऀ紀 攀氀猀攀 笀 
						setTimeout(function(){਀ऀऀऀऀऀऀऀ猀氀椀挀攀⸀愀渀椀洀愀琀攀⠀笀 眀椀搀琀栀㨀漀爀椀最圀椀搀琀栀Ⰰ 漀瀀愀挀椀琀礀㨀✀㄀⸀　✀ 紀Ⰰ 猀攀琀琀椀渀最猀⸀愀渀椀洀匀瀀攀攀搀⤀㬀 
						}, (100 + timeBuff));਀ऀऀऀऀऀ紀 
					timeBuff += 50;਀ऀऀऀऀऀ椀⬀⬀㬀 
				});਀ऀऀऀ紀   
			else if(settings.effect == 'fade' || vars.randAnim == 'fade'){਀ऀऀऀऀ瘀愀爀 椀 㴀 　㬀 
				$('.nivo-slice', slider).each(function(){਀ऀऀऀऀऀ␀⠀琀栀椀猀⤀⸀挀猀猀⠀✀栀攀椀最栀琀✀Ⰰ✀㄀　　─✀⤀㬀 
					if(i == settings.slices-1){਀ऀऀऀऀऀऀ␀⠀琀栀椀猀⤀⸀愀渀椀洀愀琀攀⠀笀 漀瀀愀挀椀琀礀㨀✀㄀⸀　✀ 紀Ⰰ ⠀猀攀琀琀椀渀最猀⸀愀渀椀洀匀瀀攀攀搀⨀㈀⤀Ⰰ ✀✀Ⰰ 昀甀渀挀琀椀漀渀⠀⤀笀 猀氀椀搀攀爀⸀琀爀椀最最攀爀⠀✀渀椀瘀漀㨀愀渀椀洀䘀椀渀椀猀栀攀搀✀⤀㬀 紀⤀㬀 
					} else {਀ऀऀऀऀऀऀ␀⠀琀栀椀猀⤀⸀愀渀椀洀愀琀攀⠀笀 漀瀀愀挀椀琀礀㨀✀㄀⸀　✀ 紀Ⰰ ⠀猀攀琀琀椀渀最猀⸀愀渀椀洀匀瀀攀攀搀⨀㈀⤀⤀㬀 
					}਀ऀऀऀऀऀ椀⬀⬀㬀 
				});਀ऀऀऀ紀 
		}਀ऀ紀㬀 
	਀ऀ⼀⼀䐀攀昀愀甀氀琀 猀攀琀琀椀渀最猀 
	$.fn.nivoSlider.defaults = {਀ऀऀ攀昀昀攀挀琀㨀✀爀愀渀搀漀洀✀Ⰰ 
		slices:15,਀ऀऀ愀渀椀洀匀瀀攀攀搀㨀㔀　　Ⰰ 
		pauseTime:3000,਀ऀऀ搀椀爀攀挀琀椀漀渀一愀瘀㨀琀爀甀攀Ⰰ 
		directionNavHide:true,਀ऀऀ挀漀渀琀爀漀氀一愀瘀㨀琀爀甀攀Ⰰ 
		keyboardNav:true,਀ऀऀ瀀愀甀猀攀伀渀䠀漀瘀攀爀㨀琀爀甀攀Ⰰ 
		manualAdvance:false,਀ऀऀ挀愀瀀琀椀漀渀伀瀀愀挀椀琀礀㨀　⸀㠀Ⰰ 
		beforeChange: function(){},਀ऀऀ愀昀琀攀爀䌀栀愀渀最攀㨀 昀甀渀挀琀椀漀渀⠀⤀笀紀Ⰰ 
		slideshowEnd: function(){}਀ऀ紀㬀 
	਀ऀ␀⸀昀渀⸀爀攀瘀攀爀猀攀 㴀 嬀崀⸀爀攀瘀攀爀猀攀㬀 
	਀紀⤀⠀樀儀甀攀爀礀⤀㬀 
਀�