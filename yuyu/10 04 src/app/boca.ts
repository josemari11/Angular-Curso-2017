import { Component } from '@angular/core';

export class Boca {
	habla(texto: string): void{
		var synth = window['speechSynthesis'];
		var voces = synth.getVoices();
		var utter = new window['SpeechSynthesisUtterance'](texto);
		utter.pitch = 1.0;
		utter.rate = 1.0;
		for (var i=0; i<voces.length; i++){
			if(voces[i].lang == "en-US"){
				utter.voice = voces[i];
			}
		}
		synth.speak(utter);
	}
}