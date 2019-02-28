Vue.component('animal-card-post', {
	template: '<div  v-bind:product-id="\'commonAnimal_\' + animal.id" product-color="#C4C8CB" class="product">\
		 <div class="thumbnail"><img v-bind:src="\'http://localhost:8080/\' + animal.jpg" v-on:click="playAudio(\'http://localhost:8080/\' + animal.effect)"/></div>\
		 <h1 class="title" v-on:click="playAudio(\'http://localhost:8080/\' + animal.speak)">{{animal.name}}</h1>\
		 <p class="description">{{animal.description}}</p></div>',
	props: ['animal'],
	methods:{
		playAudio:function(link){
			play(link);
		}
	}
})

Vue.component('tab-animal',{
	template:'<keep-alive><div id="tab-animal"><article class="htmleaf-container"><p>This is animal tab.</p>\
			<div class="card">\
				<div class="products" align="center" style="border: 0px;float">\
					<div id="card_list">\
						<animal-card-post  v-for="animal in animallist" v-bind:key="animal.id" v-bind:animal="animal"></animal-card-post>\
					</div>\
				</div>\
				<div class="footer"><a id="prev" href="#" ripple="" ripple-color="#666666" class="btn">Prev</a><a id="next" href="#" ripple="" ripple-color="#666666" class="btn">Next</a></div>\
			</div>\
			</article></div></keep-alive>',
			props: ['animallist']
})

Vue.component('tab-vehicle',{
	template:'<keep-alive><div id="tab-vehicle"><article class="htmleaf-container"><p>This is vehicle tab.</p>\
			<div class="card">\
				<div class="products" align="center" style="border: 0px;float">\
					<div id="card_list">\
					<animal-card-post  v-for="animal in animallist" v-bind:key="animal.id" v-bind:animal="animal"></animal-card-post>\
					</div>\
				</div>\
				<div class="footer"><a id="prev" href="#" ripple="" ripple-color="#666666" class="btn">Prev</a><a id="next" href="#" ripple="" ripple-color="#666666" class="btn">Next</a></div>\
			</div>\
			</article></div></keep-alive>',
			props: ['animallist']
})

Vue.component('tab-fruit',{
	template:'<keep-alive><div id="tab-fruit"><article class="htmleaf-container"><p>This is fruit tab.</p>\
			<div class="card">\
				<div class="products" align="center" style="border: 0px;float">\
					<div id="card_list">\
					<animal-card-post  v-for="animal in animallist" v-bind:key="animal.id" v-bind:animal="animal"></animal-card-post>\
					</div>\
				</div>\
				<div class="footer"><a id="prev" href="#" ripple="" ripple-color="#666666" class="btn">Prev</a><a id="next" href="#" ripple="" ripple-color="#666666" class="btn">Next</a></div>\
			</div>\
			</article></div></keep-alive>',
			props: ['animallist']
})

function exit(){
	return
}

function onLoad(){
	    var productItem = $('.product');
	    var productCurrentItem = productItem.first();
            //var tabItem = $('.ui-btn-active');
            //var tabCurrentTab = tabItem.first();
	    productCurrentItem.addClass('active');
            //tabCurrentTab.addClass('active');
	    var getProductHeight = $('.product.active').height();
	    initial();
        function initial(){
        	console.log('product item amount = ' + productItem.length)
        	productItem.first().addClass('active');
            getProductHeight = 341;
            $('.products').css({ height: getProductHeight });
            animateContentColor();
            productCurrentItem = productItem.filter('.active');
            //tabCurrentItem = tabItem.filter('.active');
        }

	    function calcProductHeight() {
	        getProductHeight = $('.product.active').height();
	        $('.products').css({ height: getProductHeight });
	    }
	    function animateContentColor() {
	        var getProductColor = $('.product.active').attr('product-color');
//	        alert(getProductColor);
	        $('body').css({ background: getProductColor });
	        $('.title').css({ color: getProductColor });
	        $('.btn').css({ color: getProductColor });
	    }

	    $('#next').on('click', function (e) {
	        e.preventDefault();
	        var nextItem = productCurrentItem.next();
	        productCurrentItem.removeClass('active');
	        if (nextItem.length) {
	            productCurrentItem = nextItem.addClass('active');
	        } else {
	            productCurrentItem = productItem.first().addClass('active');
	        }
	        calcProductHeight();
	        animateContentColor();
	        //stop play mp3
	        player.pause();
	    });
	    $('#prev').on('click', function (e) {
	        e.preventDefault();
	        var prevItem = productCurrentItem.prev();
	        productCurrentItem.removeClass('active');
	        if (prevItem.length) {
	            productCurrentItem = prevItem.addClass('active');
	        } else {
	            productCurrentItem = productItem.last().addClass('active');
	        }
	        calcProductHeight();
	        animateContentColor();
	        //stop play mp3
	        player.pause();
	    });
	    $('[ripple]').on('click', function (e) {
	        var rippleDiv = $('<div class="ripple" />'), rippleSize = 60, rippleOffset = $(this).offset(), rippleY = e.pageY - rippleOffset.top, rippleX = e.pageX - rippleOffset.left, ripple = $('.ripple');
	        rippleDiv.css({
	            top: rippleY - rippleSize / 2,
	            left: rippleX - rippleSize / 2,
	            background: $(this).attr('ripple-color')
	        }).appendTo($(this));
	        window.setTimeout(function () {
	            rippleDiv.remove();
	        }, 1900);
	    });
}

var vm = new Vue({
	    el: '#dynamic-component-demo',
	    data: {
	    	currentTab:'Animal',
	    	tabs:['Animal','Vehicle','Fruit'],
	    	animallist:[
	    		{id: '1', name : 'baboon monkey', effect : 'audio/animal/baboon_monkey.mp3', speak : 'audio/animal_nm_en/baboon_monkey_en.mp3', jpg : 'images/animal_pic/baboon_monkey.jpg', description : 'This is a baboon monkey.' },
	    		{id: '4', name : 'Baboon', effect : 'audio/animal/baboon1.mp3', speak : 'audio/animal_nm_en/baboon_en.mp3', jpg : 'images/animal_pic/baboon.jpg', description : 'This is a baboon.' },
	    		{id: '5', name : 'Bear', effect : 'audio/animal/Bear1.mp3', speak : 'audio/animal_nm_en/bear_en.mp3', jpg : 'images/animal_pic/bear.jpg', description : 'This is a bear.' },
	    		{id: '6', name : 'Dog', effect : 'audio/animal/dog.mp3', speak : 'audio/animal_nm_en/dog_en.mp3', jpg : 'images/animal_pic/dog.jpg', description : 'This is a dog.' },
	    		{id: '7', name : 'Elephant', effect : 'audio/animal/elephant8.mp3', speak : 'audio/animal_nm_en/elephant_en.mp3', jpg : 'images/animal_pic/elephant.jpg', description : 'This is an elephant.' },
	    		{id: '8', name : 'Monkey', effect : 'audio/animal/monkeys1.mp3', speak : 'audio/animal_nm_en/monkey_en.mp3', jpg : 'images/animal_pic/monkey.jpg', description : 'This is a monkey.' },
	    		{id: '9', name : 'Tiger', effect : 'audio/animal/Tiger6.mp3', speak : 'audio/animal_nm_en/tiger_en.mp3', jpg : 'images/animal_pic/tiger.jpg', description : 'This is a tiger.' },
	    		{id: '10', name : 'Penguin', effect : 'audio/animal/penguin3.mp3', speak : 'audio/animal_nm_en/penguin_en.mp3', jpg : 'images/animal_pic/penguin.jpg', description : 'This is a penguin.' },
	    		{id: '11', name : 'Lion', effect : 'audio/animal/lion.mp3', speak : 'audio/animal_nm_en/lion_en.mp3', jpg : 'images/animal_pic/lion.jpg', description : 'This is a lion.' },
	    		{id: '12', name : 'Zebra', effect : 'audio/animal/zebra3.mp3', speak : 'audio/animal_nm_en/zebra_en.mp3', jpg : 'images/animal_pic/zebra.jpg', description : 'This is a zebra.' },
	    		{id: '13', name : 'Jaguar', effect : 'audio/animal/Jaguar3.mp3', speak : 'audio/animal_nm_en/jaguar_en.mp3', jpg : 'images/animal_pic/jaguar.jpg', description : 'This is a jaguar.' }
	    	]
	    },
	    mounted:  function(){
			//this.getAjaxAnimals();
			onLoad();
		},
	    computed:{
	    	currentTabComponent:function(){
	    		return 'tab-' + this.currentTab.toLowerCase()
	    	}
	    },
	    methods: {
	    	//Tested:Chrome OK,IE re-rendering failed!
	    	getAjaxAnimals:function(){
	      		var self = this;
	      		$.ajax({
	      			url:'http://192.168.56.1:8080/WebServiceCXF-postgreSql/services/rest/animalService/getAllAnimals',
	      			method:'get',
	      			statusCode:{
	      				404:function(){
	      					alert("Resource not found!")
	      				}
	      			},
	      			success:function(response) {
	      				self.animallist = response;
	      				console.log(response);
	      			},
	      			error:function(){
	      				console.log('web service failure!');
	      			}
	      		});
	    	}
	    }
})


vm.$watch('animallist',function(nval,oval){
	console.log('animallist oval size = ' + this.animallist.length);
	console.log('animallist nval size = ' + this.animallist.lenght);
	onLoad();
})

vm.$watch('currentTab',function(nval,oval){
	console.log('currentTab oval size = ' + this.animallist.length);
	console.log('currentTab size = ' + this.animallist.lenght);
	onLoad();
})

