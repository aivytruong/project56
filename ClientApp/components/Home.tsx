import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';



export class Home extends React.Component<RouteComponentProps<{}>> {

    render() {

        (function () {

            function Slideshow(element) {
                this.el = document.querySelector(element);
                this.init();
            }

            Slideshow.prototype = {
                init: function () {
                    this.wrapper = this.el.querySelector(".slider-wrapper");
                    this.slides = this.el.querySelectorAll(".slide");
                    this.previous = this.el.querySelector(".slider-previous");
                    this.next = this.el.querySelector(".slider-next");
                    this.index = 0;
                    this.total = this.slides.length;
                    this.timer = null;

                    this.action();
                    this.stopStart();
                },
                _slideTo: function (slide) {
                    var currentSlide = this.slides[slide];
                    currentSlide.style.opacity = 1;

                    for (var i = 0; i < this.slides.length; i++) {
                        var slide = this.slides[i];
                        if (slide !== currentSlide) {
                            slide.style.opacity = 0;
                        }
                    }
                },
                action: function () {
                    var self = this;
                    self.timer = setInterval(function () {
                        self.index++;
                        if (self.index == self.slides.length) {
                            self.index = 0;
                        }
                        self._slideTo(self.index);

                    }, 5000);
                },
                stopStart: function () {
                    var self = this;
                    self.el.addEventListener("mouseover", function () {
                        clearInterval(self.timer);
                        self.timer = null;

                    }, false);
                    self.el.addEventListener("mouseout", function () {
                        self.action();

                    }, false);
                }


            };

            document.addEventListener("DOMContentLoaded", function () {

                var slider = new Slideshow("#main-slider");

            });


        })();

        return <div className="slider" id="main-slider">
            <div className="slider-wrapper">
                <img src="https://pbs.twimg.com/media/Cl9q5-1WYAAfHL7.jpg:large" alt="First" className="slide" />
                <img src="http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2017/05/lego_main.jpg?itok=OYmDXcmD" alt="Second" className="slide" />
                <img src="https://torrentsgames.org/wp-content/uploads/2017/01/Lego-City-Undercover-Xbox360.jpg" alt="Third" className="slide" />
            </div>
        </div>

    }
}

