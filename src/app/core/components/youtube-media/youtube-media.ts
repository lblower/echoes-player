import { Component, EventEmitter, Input, Output } from 'angular2/core';
import { NgClass } from 'angular2/common';
import { YoutubeMediaResource } from '../../interfaces/youtube.media.resource.d';

/* @ngInject */
@Component({
	selector: 'youtube-media',
	template: require('./youtube-media.html'),
	inputs: [
		'media'
	],
	// outputs: [
	// 	'play',
	// 	'queue',
	// 	'add'
	// ],
	directives: [ NgClass ]
})
export class YoutubeMedia {
	@Input() media: YoutubeMediaResource;
	@Output() play = new EventEmitter();
	@Output() queue = new EventEmitter();
	@Output() add = new EventEmitter();

	showDesc = false;
	isPlaying = false;

	constructor () {

	}

	ngOnInit(){
		this.media.statistics.likeCount = parseInt(this.media.statistics.likeCount);
		this.media.statistics.viewCount = parseInt(this.media.statistics.viewCount);
	}

    playVideo (media: YoutubeMediaResource) {
    	this.play.next(media);
	}

	queueVideo(media: YoutubeMediaResource) {
		this.queue.next(media);
	}

	addVideo (media: YoutubeMediaResource) {
		this.add.next(media);
	}

	toggle (showDesc: Boolean) {
		this.showDesc = !showDesc;
	}
}