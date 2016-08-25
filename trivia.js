/*Anime Quiz on Characters , Specific Questions 
*/ 

//game variables 
var question;
var questionNumber = 0; 
var answers = [];
var correct = 0; 
var incorrect= 0;
var gameComplete = false; 

//constructors
var Character = function(name, img){
    this.name = name ; 
    this.img = img;
   
}

//audio 

var soundDaijoubu = new Audio('assets/audio/daijoubu.mp3');
var soundDaijoubu2 = new Audio('assets/audio/daijoubu2.mp3');
var soundDaijoubu3 = new Audio('assets/audio/daijoubu3.mp3');
var soundDaijoubu4 = new Audio('assets/audio/daijoubu4.mp3');
var soundFaito = new Audio('assets/audio/faito.mp3');
var soundGoodJob = new Audio('assets/audio/good-job.mp3');
var music = new Audio('assets/audio/music.mp3');
var soundPantsu = new Audio('assets/audio/pantsu.mp3');
var soundShimpainai = new Audio('assets/audio/shimpainai.mp3');
var soundIncorrect = new Audio('assets/audio/soundIncorrect.mp3');
var soundIncorrect2 = new Audio('assets/audio/soundIncorrect2.mp3');
var soundTryagain = new Audio('assets/audio/tryagain.mp3');
var soundTryagain2 = new Audio('assets/audio/tryagain2.mp3');
var victoryMusic = new Audio('assets/audio/victory-music.mp3');

//audio collections 
var correctSounds = [soundGoodJob, soundFaito, soundPantsu]; 
var incorrectSounds = [soundDaijoubu, soundDaijoubu2, soundDaijoubu3, soundDaijoubu4, soundIncorrect, soundIncorrect2, soundShimpainai]; 
var tryagainSounds = [soundTryagain, soundTryagain2]; 

//images 
var img_Ahagon = 'https://66.media.tumblr.com/f57be4410a094d6b30fce44f3d1c637d/tumblr_obyndiFC821qa94xto1_500.gif'; 
var img_Yagami = 'http://66.media.tumblr.com/a3cd4397f218bfe448ee233ebb0cc03a/tumblr_oal9kj6u1J1u86t2qo1_1280.gif'; 
var img_Adashino = 'http://45.media.tumblr.com/9b9a34018262e618b69f8e34655a17f5/tumblr_o5d5i3m9xI1v7jzwdo1_500.gif'; 
var img_Seigen = 'http://pa1.narvii.com/6152/6ad05a3fc36ef5b471b784e8aa06132615cd9448_hq.gif'; 
var img_Saitama = 'https://65.media.tumblr.com/ee016fcdb3846dd464617c7480a46268/tumblr_inline_nzuds5r00P1rpv0j7_540.gif'; 
var img_Rory = 'https://45.media.tumblr.com/e66d3412e54e88994d492d00b5468825/tumblr_o50q7qMxbj1rv1jano1_540.gif'; 
var img_enmaAi = 'https://67.media.tumblr.com/48ac774b9fc504bdf7ee5ccd103a5eda/tumblr_mzya6lDrHX1topdafo1_500.gif'; 
var img_Taiga = 'http://67.media.tumblr.com/bab91e73c28847c5bade99c1cfd1fcd1/tumblr_narvhddS1i1sv98gio1_500.gif'; 
var img_Spike = 'https://media.giphy.com/media/4ilFRqgbzbx4c/giphy.gif'; 
var img_Erina = 'https://67.media.tumblr.com/4d3d05f9bb2fd34855982df62bd22cb6/tumblr_nple8gbIWA1t89rpeo1_500.gif'; 
var img_Levi = 'http://67.media.tumblr.com/81de59ba0f18a10b467f51e44d3da5fc/tumblr_nfwa10LXrS1u15sbeo1_500.gif';
var img_Asuka = 'http://25.media.tumblr.com/6c0cfeb987738a03e9a9eede2f96ee2e/tumblr_mx7j2h01L41rvbjx3o1_500.gif'; 
var img_Ayumu = 'http://vignette4.wikia.nocookie.net/azumanga/images/5/53/Osaka_GIF_5.gif/revision/latest?cb=20130930205142'; 
var img_Shiina = 'https://ncache.ilbe.com/files/attach/new/20131117/377678/286874367/2382510072/7b615534f7f5378a64e95f7340ade765.gif'; 
var img_Umaru = 'http://67.media.tumblr.com/c3639e633d0c45711cd3391a5faeb180/tumblr_nu9czzRpui1tydz8to1_540.gif';
var img_Tomoko = 'https://66.media.tumblr.com/fb8b938e19e7cf0cb67f4272f4e46843/tumblr_n7723bDj041t5oqd4o1_500.gif';
var img_Konata = 'https://media.giphy.com/media/jVuDkNNmAofpS/giphy.gif'; 
var img_Chitanda = 'https://media.giphy.com/media/H3E89YiWU3gcM/giphy.gif'; 
var img_Kyoko = 'https://66.media.tumblr.com/42084dfe6a0f4181a3e4ef633c412554/tumblr_njptm8SQFS1ratacwo1_500.gif'; 
var img_Rias = 'https://1.bp.blogspot.com/-Vpdx2hF4J-8/VFLMqUb9rUI/AAAAAAAAA1c/701zZJ0jbl4/s1600/im0xJdf0rAbvH.gif'; 
var img_Hifumi = 'https://66.media.tumblr.com/a4d49ba437cef782d65081b213e21894/tumblr_oanw3g5j8c1qa94xto2_500.gif'; 
var img_Aoba = 'https://66.media.tumblr.com/e013b0ce9ef2836c36862f0beaef6b98/tumblr_o9favwT9CT1qz64n4o2_500.gif'; 
var img_Yomi = 'http://66.media.tumblr.com/8194d89de72bb05696fdde066cf2a561/tumblr_mjzpx09pRB1r6i84qo1_500.gif'; 
var img_Soma = 'https://media.giphy.com/media/EkzAjEJzNYKpG/giphy.gif'; 
var img_Shinichi = 'https://67.media.tumblr.com/5bec9cdb3f88fc49c9c9dee29f819953/tumblr_o663j0jG0V1ugj7e9o1_500.gif'; 
var img_Tomoyo = 'https://38.media.tumblr.com/a079599164b3f3181d3199c5089e0289/tumblr_nhc79dbA9H1qbg64ao1_500.gif'; 
var img_Tachibana = 'http://31.media.tumblr.com/5019d1d99911056932ad0d9d10601d85/tumblr_mldmfvQAHM1sncunxo1_500.gif'; 
var img_Nagato = 'http://orig00.deviantart.net/b26f/f/2015/360/d/e/yuki_nagato_being_cool_4___gif_animation_by_kyoflameashhylden-d9lk6c6.gif'; 
var img_Hajime = 'https://66.media.tumblr.com/177a56f568d41d030605700207343f49/tumblr_o9ucc0BvKC1s21xzoo2_500.gif'; 
var img_Shion = 'http://67.media.tumblr.com/tumblr_mc0vrwI8kf1rxlbuko1_r4_500.gif';  
//characters
var AhagonUmiko = new Character('Ahagon Umiko', img_Ahagon);
var YagamiKou = new Character('Yagami Kou', img_Yagami); 
var AdashinoBenio = new Character('Adashino Benio', img_Adashino); 
var SeigenAmawaka = new Character('Seigen Amawaka', img_Seigen); 
var Saitama = new Character('Saitama', img_Saitama); 
var RoryMercury = new Character('Rory Mercury', img_Rory); 
var AiEnma = new Character('Ai Enma', img_enmaAi); 
var AisakaTaiga = new Character('Aisaka Taiga', img_Taiga); 
var SpiegelSpike = new Character('Spiegel Spike', img_Spike);
var NakinaErina = new Character('Nakina Erina', img_Erina); 
var LeviKazama  = new Character('Levi Kazama', img_Levi); 
var AsukaLangley = new Character('Langley Asuka', img_Asuka); 
var AyumuKasuga = new Character('Ayumu Kasuga', img_Ayumu); 
var ShiinaMashiro = new Character('Shiina Mashiro', img_Shiina); 
var UmaruDoma = new Character('Umaru Doma', img_Umaru); 
var KurokiTomoko = new Character('Kuroki Tomoko', img_Tomoko);
var IzumiKonata = new Character('Izumi Konata', img_Konata); 
var ChitandaEru = new Character('Chitanda Eru', img_Chitanda); 
var ToshinoKyoko= new Character('Toshino Kyoko', img_Kyoko); 
var GremoryRias = new Character('Gremory Rias', img_Rias); 
var HifumiTakimoto = new Character('Takimoto Hifumi', img_Hifumi); 
var SuzukazeAoba = new Character('Suzukaze Aoba', img_Aoba); 
var IsaYamaYomi = new Character('Isayama Yomi', img_Yomi); 
var YukihiraSoma = new Character('Yukihira Soma', img_Soma); 
var IzumiShinichi = new Character('Izumi Shinichi', img_Shinichi); 
var SakagamiTomoyo = new Character('Sakagami Tomoyo', img_Tomoyo); 
var TachibanaKanade = new Character('Tachibana Kanade', img_Tachibana); 
var NagatoYuki = new Character('Nagato Yuki', img_Nagato); 
var ShinodaHajime = new Character('Shinoda Hajime', img_Hajime); 
var SonoZakiShion = new Character('SonoZaki Shion', img_Shion); 





//character pool of wrong answers 
var charPool = ['Aino Minako','Akagi Takenori','Amano Gurikazu','Aoyama Motoko','Arashiyama Sera','Asada Tetsuya','Asaka Reiko','Asuka Daiki','Ayanami Rei','Ayanokouji Takashi','Ayukawa Madoka','Azuya Nagisa','Fujioka Batanen','Chiba Mamoru','Daidoji Tomoyo','Echizen Ryoma','Edogawa Conan','Fuguta Sazae','Fuji Shusuke','Fujimiya Kaede','Fujimiya Momiji','Fujisaki Akari','Fujiwara Sai','Fujiyama Okometsubu','Gohda Takeshi','Haibara	Ai','Hakuhoin Ayano','Hanabishi Kaoru','Hanagata Mitsurugi','Hananakajima Masaru','Haneoka Meimi','Haruno Sakura','Hatake Kakashi','Hayama Akito','Hayase Misa','Hazuki Seira','Yui Heero','Hibiki Go','Hibiki Ken-ichi','Hibiki Ryoga','Hibiya Chitose','Hidaka Azumi','Higuchi Kotaro','Higurashi Kagome','Himemiya Ancy','Himura Kenshin','Hino Rei','Hojo Yukino','Honekawa Suneo','Hongou Yui','Horaki Hikari','Hoshikawa Yayoi','Hoshiwatari Goro','Hououji Fu','Ibuki Maya','Ibuya Manjiro','Ichijou Hikaru','Ijuin Akira','Ikari Shinji','Ikenami Eiichi','Ikusawa Ruriko','Imonoyama Nokoru','Hitomebore Inaho','Inoue Ritsuko','Inui Sadaharu','Isikawa Goemon','Isono Katsuo','Izumo Ginga','Jigen Daisuke','Kaga Tetsuo','Kagariya Momiji','Kagurazaki Miyabi','Kaibara Futaba','Kaidou Kaoru','Kaiou Michiru','Kakizaki Hayao','Kakugeiin Kafuko','Kamina Ayato','Kamiya Kaoru','Kamoshita Yusuke','Kamui Ai','Kamui Akira','Kanzaki Akari','Kanzaki Sumire','Kasuga Ayumu','Kasuga Yui','Katsuragi Misato','Kawamura Takashi','Kikumaru Eiji','Kimidori Akane','Kindaichi Hajime','Kino Makoto','Kinomoto Sakura','Kinomoto Touya','Kiryu Toshiro','Kisaragi Honey','Kisaragi Kuon','Kitagawa Rio','Kobayakawa Miyuki','Kobayashi Akane','Kodai Susumu','Kojima Yoshiyuki','Kokubunji Minoru','Komiyama Airi','Konno Mitsune','Konoe Kaoru','Kouzuki Miyu','Kudo Shin-ichi','Kudo Yuichi','Kumashiro Sakuya','Kunikida Daitetsu','Kuonji Ukyou','Kuraaku Kenta','Kurama Yuki','Kurata Sana','Kurosaki Hisoka','Kurosawa Minamo','Kusakabe Maron','Kusanagi Hokuto','Kusanagi Mamoru','Kusanagi Motoko','Lynn Min-mei','Maehara Shinobu','Makimura Kaori','Makino Tsukushi','Makunouchi Ippo','Tachibana Maria','Masaki Kiriko','Masaki Tenchi','Matsudaira Azusa','Matsuzawa Hitomi','Meiou Setsuna','Mendo Shutaro','Mido Madoka','Mido Tomoe','Mihama Chiyo','Mikage Aya','Mimori Seira','Minami Kaede','Minamoto Shizuka','Minazuki Chika','Minazuki Taeko','Mine Fujiko','Mishima Reika','Mitani Yuki','Mitarai Hiroshi','Mitarai Kaoru','Mitsui Hisashi','Mitsukuni Aoi','Mitsukuni Mito','Miyagi Ryota','Miyazawa Miyuki','Miyuki Mayu','Mizuhara Koyomi','Mizuno Ami','Momoshiro Takeshi','Mori Yuki','Moroboshi Ataru','Motosuwa Hideki','Muraki Kazutaka','Muto Yuugi','Nagai Yoshihiko','Nagare Shizuka','Nakamura Gen','Narusegawa Naru','Natsume Akiko','Natsume Atsuko','Natsume Kyusaku','Natsume Ryunosuke','Nekki Basara','Nenga Mutsuki','Nobi Nobita','Norimaki Arare','Norimaki Senbei','Ohgami Ichiro','Oishi Shuichiro','Oizumi Yakumo','Ohkawa Utako','Ohkouchi Sakuya','Omura Yumi','Osaka Naru','Otohime Mutsumi','Otonashi Kyoko','Rukawa Kaede','Ryuzaki Sakuno','Ryuzaki Sumire','Ryuzaki Umi','Ryuzouji Junpei','Tokisada Sachiko','Saeba Ryo','Saionji Kanata','Sakuma Kazuto','Sakuraba Aoi','Sakuragi Hanamichi','Sanada Mio','Saotome Ranma','Sasaoka Natsuki','Sawaguchi Koume','Sawanoguchi Sae','Seiya Kou','Seki Joji','Sendou Akira','Shibata Rie','Shido Hikaru','Shima Daisuke','Shimazaki Rintaro','Shimbo Hiromu','Shimizu Taeko','Shindo Hikaru','Shinguji Sakura','Shinozaki ','Shirakaba Chie','Shito Haru','Soramame Ta','Sorano Hika','Soryu Asu','Suetake Kenta','Suzuhara Natsu','Suzuki Mika','Taiki Kou','Takamura Su','Takeuchi Ryo','Takino Tomo','Tanizaki Yukari','Tatsumi Seiichir','Tekuno Reiji','Tendo Aka','Tendo Kasu','Tendo Nabi','Tenjou Ute','Tenjouin Katsu','Tenkawa Akito','Ten-ou Haru','Tezuka Kunimitsu','Tezuka Ryoan','Tominaga Minako','Tomoe Hotaru','Toudou Yukifumi','Toya Akira','Tsujimoto Natsumi','Tsukino Shingo','Tsukino Usagi','Tsukishiro Yukito','Tsutsui Kimihiro','Tsuzuki Asato','Uchiha Sasuke','Ueda Hiroyasu','Uematsu Koboshi','Ukiya Shun','Umino Gurio','Urameshi Yusuke','Urashima Keitaro','Uryu Kana','Usada Hikaru','Uzumaki Naruto','Watanabe Takumi','Watari Yutaka','Yamabuki Midori','Yamada Seina','Yamagishi Mayumi','Yamamoto Yohko','Yamano Miyu','Yamazaki Shinnosuke','Yanagida Ichino','Yaten Kou','Yuuki Miaka','Yuuki Setsu','Yagami Light','Takada Kiyomi','Amane Misa','Shibuimaru Takuo','Misora Naomi','Mikami Teru','Hinamori Amu','Hinata Fuyuki','Sawada Tsuna']

function playSound(sound){
    music.volume = 0.3;  
	sound.play();
    setTimeout(function(){ music.volume = 1.0; }, 2500); 
    
}


function togglePlay(song, loopControl) {
  song.loop = loopControl; 
  return song.paused ? song.play() : song.pause();
}

function isPlaying(music){
     
    if(music.paused === false){
        togglePlay(music, false);
    }
}


function playCorrectSound(){
    var rand = Math.floor(Math.random() * correctSounds.length) + 0; 
     playSound(correctSounds[rand]); 
}


function playIncorrectSound(){
    var rand = Math.floor(Math.random() * incorrectSounds.length) + 0; 
    playSound(incorrectSounds[rand]); 
}

function playTryagainSound(){
    var rand = Math.floor(Math.random() * tryagainSounds.length) + 0; 
    playSound(tryagainSounds[rand]); 
}


function getAnswers(){
    for(var i = 0 ; i < 3; i++ ){
        var rand = Math.floor(Math.random() * charPool.length)+0; 
        var wrongAnswer = charPool[rand];
        answers.push(wrongAnswer); 
        
    }
    
    if(question != null){
        answers.push(question.name);
    } 
}


function loadAnswer(){
    Game.cleanup(); 
    setQuestion();
    getAnswers(); 
    shuffle();
    displayAnswers();
    setClickHandler();
    setQuestionsRemaining(); 
}


function shuffle(){
    
   for(var i = 0 ; i < 100 ; i++){
        var x= 0 , y = 0 ; 
        (function getRandom(){
        x = Math.floor(Math.random() * answers.length) + 0;
        do{
            y = Math.floor(Math.random() * answers.length) + 0;
        }while(x===y); 
       
        }()); 
    
       
        var swap = answers[x]; 
        answers[x] = answers[y];
        answers[y] = swap;
        
   }
}

function setQuestion(){ 
    
    question = Game.characters[questionNumber];
        if(question != null){
             var i = $('<img>'); 
    
            i.attr('src', question.img);
    
            $('.questions').html(i);
            questionNumber++ 
    
            
        }
        else{
            gameComplete = true;
        
        }
}

function setQuestionsRemaining(){
    $('#questions-remaining').html('<p>'+ questionNumber+ '/'+(Game.characters.length - 1)+'</p>' ); 
}


function displayAnswers(printAnswer){
    if(question != null){
        var letters = ['(a):', '(b):', '(c):', '(d):']; 
    
        for(var i = 0 ; i < answers.length; i++){
        var answer = $('<p> '+answers[i]+'</p>');
      
            answer.addClass('answer');
            answer.attr('data-name', answers[i]); 
            answer.prepend(letters[i]); 
      
            $('.answers').append(answer); 
      
        }
    }
}

function disableClick(){
    $('.answer').off('click'); 
}

function clearAnswers(){
    $('.answers').empty(); 
}


function setClickHandler(){
    $('.answer').on('click',function(){
        var self = $(this); 
        isCorrect(self);
    })
       
}

function timesUp(){
     for(var i = 0 ; i < 5 ; i++){
         $('#timer').html('<p>Times Up!</p>'); 
     }
    
    
}

function timeClose(){
    $('#timer').css('color', 'crimson');

}

function showResults(){
        
        $('.game-elements').css('display', 'none');
        $('.results').css('display', 'block'); 
        var newDiv = $('<div>'); 
        var tag = $('<h2> Thank you for playing! </h2>');
        var correctTag = $('<h3>Correct Answers: '+ correct + '</h3>'); 
        var incorrectTag = $('<h3>Incorrect Answers: ' + incorrect + '</h3>'); 
        
        var playAgain = $('<button>'); 
        playAgain.text('Play Again?'); 
        playAgain.on('click', Game.reset); 
    
        //plain javascript playAgain button & click handler for bug testing 
        /*var playAgain = document.createElement('BUTTON'); 
        playAgain.innerHTML = 'Play Again?'; 
        playAgain.onclick = function(){
            Game.reset(); 
        }*/ 
        
        
        newDiv.append(tag);
        newDiv.append(correctTag); 
        newDiv.append(incorrectTag);
        newDiv.append(playAgain);
        newDiv.addClass('results-block'); 
        
        $('.results').append(newDiv);
    
        if(correct / (Game.characters.length-1) > .7 ){
            victory(); 
        }
        else{
            tryAgain(); 
        }

}

function victory(){
     isPlaying(music);
     victoryMusic.currentTime = 0; 
     togglePlay(victoryMusic, false);
    $('.results').prepend('<h1>Good Job!</h1>')
    
}

function tryAgain(){
    
    $('.results').prepend('<h1>Nice Try!</h1>'); 
}



function isCorrect(self){

  disableClick(); 
 
  var answer = self.attr('data-name'); 
  
  if(answer === question.name){
      self.addClass('alert alert-success');
      correct++; 
      playCorrectSound(); 
      console.log('correct!'); 
  }
  else{
      self.addClass('alert alert-danger');
     var answers = $('.answers').children(); 
      
     for(var i = 0 ; i < answers.length; i++){
        var answer = answers[i]; 
         var name = answer.getAttribute('data-name'); 
         
         if(name === question.name){
              answer.className = 'answer alert alert-success'; 
             
             
         }
     }
     incorrect++;
     playIncorrectSound(); 
     console.log('incorrect!'); 
     
  }
            
  setTimeout(loadAnswer, 2500); 
       
}





//timer 
var Timer = {
    set:function(min, secTens, secOnes){ 
        
            function downTick(){
            if(gameComplete){
                clearInterval(interval);
                console.log('cleared');
                showResults();
               
            }
            
            $('#timer').html('<p>'+min+':'+secTens+secOnes+'</p>');
            
            if(min ===0 && secTens ===0 && secOnes ===0){
                clearInterval(interval); 
                console.log('cleared'); 
                timesUp(); 
                setTimeout(showResults, 3000); 
            }
             else if(min === 0 && secTens ===3 && secOnes ===0){
                timeClose(); 
                secOnes =10;
                secTens--;
                secOnes--;
            }
            else if(secOnes ===0 && secTens ===0){
                min--;
                secOnes = 10
                secTens = 5; 
                secOnes--; 
            }  
            else{
                 if(secOnes ===0){
                    secOnes =10;
                    secTens--;
                    secOnes--; 
                }
                else{
                    secOnes--;
                }
            }  
        }
        var interval = setInterval(downTick, 1000); 
        
    },
    
    reset:function(){
        $('#timer').html('Time Start!');  
    }
    

}

var Game = {
    start:function(){
        isPlaying(victoryMusic); 
        music.currentTime = 0 ; 
        togglePlay(music, false); 
        Timer.set(3,2,5);
         loadAnswer(); 
        
    },
    
    characters: [AhagonUmiko, AdashinoBenio,SpiegelSpike, RoryMercury, YagamiKou, Saitama, AiEnma, SeigenAmawaka, AisakaTaiga, NakinaErina, LeviKazama, HifumiTakimoto, AsukaLangley, AyumuKasuga, ShiinaMashiro, UmaruDoma, KurokiTomoko, IzumiKonata, ChitandaEru, ToshinoKyoko, GremoryRias, SuzukazeAoba, IsaYamaYomi, YukihiraSoma, IzumiShinichi, SakagamiTomoyo, TachibanaKanade, NagatoYuki, ShinodaHajime, SonoZakiShion, null], 
    
    cleanup:function(){
        $('.questions').empty(); 
        answers = []; 
        clearAnswers();
    },
    
    reset:function(){
        $('.results').empty(); 
        $('.results').css('display', 'none'); 
        $('.game-elements').css('display', 'block'); 
        $('#timer').css('color', 'black'); 
        Game.cleanup(); 
        Timer.reset();
        questionNumber = 0 ;
        gameComplete = false;
        correct = 0 ; 
        incorrect = 0 ; 
        Game.start(); 
        console.log('game reset'); 
    }
    
}


//calls 
Game.start(); 



