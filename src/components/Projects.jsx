import { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import witcher from '../images/gwent-pairs.png'
import ecb from '../images/east-coast-boogie.png'
import bib from '../images/boys-in-blue.png'
import amalgam from '../images/amalgam-comics.png'
import pirates from '../images/pirates.png'


function Projects() {
    return (
        <div className="projects-container" id="projects">

            
            
            <div className="projects-title">
                <h2>Projects</h2>
                <p className="projects-info">Below are some of my projects that I created during my time with the League of Shadows as well as my own time after my training was complete. I have decided not to make any changes or update any of these projects to show my growth.</p>
            </div>
            
                <Swiper
                    
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={100}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>

                        <div className="left">
                            <a target="_blank" rel="noreferrer" href="https://smikhu.github.io/Gwent-Pairs/"><img src={witcher} alt="witcher" className="swiper-image"/> </a>
                        </div>

                        <div className="right">
                            <h2>Gwent Pairs</h2>
                            <p>An app inspired by the video game series The Witcher. A matching game where you have a limited amount of chances to match all 8 cards(Gwent cards from The Witcher 3 : The Wild Hunt) on the board before it's game over.</p>
                            <p>This was the very first project and game that I created. It was inspired by my love for my favorite video game The Witcher 3 : Wild Hunt. </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>

                        <div className="left">
                            <a target="_blank" rel="noreferrer" href="https://east-coast-boogie.herokuapp.com/"><img src={ecb} alt="eastcoastboogie" className="swiper-image"/> </a>
                        </div>

                        <div className="right">
                            <h2>East Coast Boogie</h2>
                            <p>A couple cool cities if you're on a road trip on the east coast! Users have the ability to view great experiences by categories of : Places to eat, landmarks/must visit locations, and events/activities to enjoy.</p>
                            <p>This was the first group project that I participated in. We all worked on it together throughout the project time, my main contribution was the styling of the pages.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>

                        <div className="left">
                            <a target="_blank" rel="noreferrer" href="https://smikhu-project2.herokuapp.com/chelsea"><img src={bib} alt="boysinblue" className="swiper-image"/> </a>
                        </div>

                        <div className="right">
                            <h2>Boys In Blue</h2>
                            <p>A fan project dedicated to Chelsea Football Club. This app gives information on the history of the club as well as statistics and information on individual players at Chelsea.</p>
                            <p>A solo project that I decided to create based on my favorite football club. This was greatly inspired by Chelsea unexpectedly winning the champions league. </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>

                        <div className="left">
                            <a target="_blank" rel="noreferrer" href="https://wonderful-beaver-3ecebb.netlify.app/page1"><img src={amalgam} alt="amalgamcomics" className="swiper-image"/> </a>
                        </div>

                        <div className="right">
                            <h2>Amalgam Comics</h2>
                            <p>An app where you can search your favorite hero/villain and find information and statistics about them. The styling was heavily inspired by an old comic book look with the washed out yellow background.</p>
                            <p>Another solo project and my first time incorporating an API to my project. This project was inspired by my love for Marvel and DC movies. I came up with the styling while learning about CSS grid.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>

                        <div className="left">
                            <a target="_blank" rel="noreferrer" href="https://pirates-project.herokuapp.com/"><img src={pirates} alt="pirates" className="swiper-image"/> </a>
                        </div>

                        <div className="right">
                            <h2>Pirates</h2>
                            <p>An app where you can search for movies, view a full description on them and add them to your favorites/to watch list.</p>
                            <p>Another solo project that was inspired by my second favorite hobby after playing video games; which is watching movies.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>


    


        </div>
    )
}

export default Projects;