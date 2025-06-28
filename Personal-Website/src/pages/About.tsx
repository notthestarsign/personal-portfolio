import Navbar from "@/components/ui/Navbar";
import ChildPhoto1 from "@/assets/Child Photo 1.JPEG";
import ChildPhoto2 from "@/assets/Child Photo 2.JPEG";
import personalPhoto from "@/assets/profile.png";
import personalPhoto2 from "@/assets/Profile2.JPEG";

export default function About() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
          <Navbar />

          <div className="p-6 bg-black mt-6 mb-6 flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={ChildPhoto1}
                alt="Childhood Photo"
                className="w-[300px] md:w-[400px] h-auto rounded-lg border-4 border-yellow-400 shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl mb-3 underline underline-offset-4">Background:</h2>
              <p className="text-gray-300 leading-relaxed">
                <ul className="relative border-l border-yellow-400 ml-4 pl-6 space-y-6">
                  <li>
                    <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                    <h3 className="text-yellow-400 font-semibold">Born in 2003 September 11</h3>
                    <p>Born and raised in a small town, Parys in the Free State, South Africa.</p>
                  </li>
                  <li>
                    <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                    <h3 className="text-yellow-400 font-semibold">Upbringing</h3>
                    <p>Raised by my mother and grandparents, who instilled in me the value of education and hard work.</p>
                     <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                  </li>
                  
                </ul>
                
              </p>
            </div>
          </div>
    
          {/* Education Section */}
          <div className="p-6 bg-black mt-6 mb-6 flex flex-col md:flex-row-reverse items-center md:items-start gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={ChildPhoto2}
                alt="Childhood Photo"
                className="w-[300px] md:w-[400px] h-auto rounded-lg border-4 border-yellow-400 shadow-xl"
              />
            </div>
            <div className="ml-60 w-full md:w-1/2 flex flex-col justify-center">
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl mb-3 underline underline-offset-4">Education:</h2>
                <ul className="relative border-l border-yellow-400 ml-4 pl-6 space-y-6">
                  <li>
                    <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                    <h3 className="text-yellow-400 font-semibold">2010 – Started School</h3>
                    <p className="text-gray-300">Began Grade 1 at Schonkenville Intermediate School.</p>
                  </li>
                  <li>
                    <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                    <h3 className="text-yellow-400 font-semibold">2021 – Matriculated</h3>
                    <p className="text-gray-300">Completed Grade 12 and took a gap year to improve results.</p>
                  </li>
                  <li>
                    <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                    <h3 className="text-yellow-400 font-semibold">2022 – Gap Year</h3>
                    <p className="text-gray-300">Completed Grade 12 and took a gap year to improve results.</p>
                  </li>
                  <li>
                    <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                    <h3 className="text-yellow-400 font-semibold">2023 – University of Pretoria</h3>
                    <p className="text-gray-300">Enrolled for BSc Computer Science.</p>
                  </li>
                  <li>
                    <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                    <h3 className="text-yellow-400 font-semibold">2025 – Final Year</h3>
                    <p className="text-gray-300">Completing final year and exploring career opportunities.</p>
                    <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                  </li>
                </ul>
                </div>
              </div>
          </div>

          {/* What Drives Me Section */}
          <div className="p-6 bg-black mt-6 mb-6 flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={personalPhoto}
                alt="Childhood Photo"
                className="w-[300px] md:w-[400px] h-auto rounded-lg border-4 border-yellow-400 shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl mb-3 underline underline-offset-4">What Drives Me:</h2>
              <p className="text-gray-300 leading-relaxed">
                <ul className="relative border-l border-yellow-400 ml-4 pl-6 space-y-6">
                  <li>
                    <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                    <h3 className="text-yellow-400 font-semibold">A hunger for continuous learning</h3>
                    <p>
                      I am always on the lookout for new technologies and frameworks to learn. <br />
                      This helps me strengthen my skills and stay updated in the ever-evolving tech landscape.
                    </p>
                  </li>
                  <li>
                    <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                    <h3 className="text-yellow-400 font-semibold">Creating software that solves real-world problems</h3>
                    <p>
                      I am passionate about building software that makes life easier and more meaningful for people. <br />
                      Whether it's a small utility or a large application, I love the challenge of solving problems not only through code, but every aspect of the software development process.
                    </p>
                  </li>
                  <li>
                    <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                    <h3 className="text-yellow-400 font-semibold">Helping others through technology</h3>
                    <p>
                      I believe in the power of technology to improve lives. <br />
                      Whether it's through open-source contributions, mentoring, or building tools that help others, I strive to make a positive impact and essentially make lives easier.
                    </p>
                  </li>
                  <li>
                    <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                    <h3 className="text-yellow-400 font-semibold">Staying humble, curious, and consistent</h3>
                    <p>
                      I approach every challenge with humility and a willingness to learn. <br />
                      I believe that consistency is key to success, and I strive to improve myself every day, both personally and professionally. <br />
                      I am always open to feedback and new ideas, and I believe that this mindset will help me grow as a developer and as a person.
                    </p>
                     <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                  </li>
                </ul>
              </p>
            </div>
          </div>

          {/* Fun Facts Section */}
          <div className="p-6 bg-black mt-6 mb-6 flex flex-col md:flex-row-reverse items-center md:items-start gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={personalPhoto2}
                alt="Childhood Photo"
                className="w-[300px] md:w-[400px] h-auto rounded-lg border-4 border-yellow-400 shadow-xl"
              />
            </div>
            <div className="ml-60 w-full md:w-1/2 flex flex-col justify-center">
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl mb-3 underline underline-offset-4">Fun Facts:</h2>
                <ul className="relative border-l border-yellow-400 ml-4 pl-6 space-y-6">
                  <li>
                    <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                    <h3 className="text-yellow-400 font-semibold">Music</h3>
                    <p className="text-gray-300">
                      Music has always been a big part of my life. I can say proudly that "I can't live without music." <br />
                      ... <br />
                      I love listening to a wide range of genres, but mostly Hip-Hop as I find it inspiring and motivating. <br />
                      ... <br />
                      I used to be a rapper, but now I just enjoy listening to it. <br />
                    </p>
                  </li>
                  <li>
                    <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                    <h3 className="text-yellow-400 font-semibold">Top 3 Artists</h3>
                    <p className="text-gray-300">
                      A-reece <br />
                      J Cole <br />
                      Drake <br />
                      Kendrick Lamar <br />
                    </p>
                  </li>
                  <li>
                    <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                    <h3 className="text-yellow-400 font-semibold">Programming Background</h3>
                    <p className="text-gray-300">
                      I went into university with no prior programming experience. <br />
                      ... <br />
                      I only started learning programming in my first year of university, and I have been loving it ever since. <br />
                    </p>
                  </li>
                  <li>
                    <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                    <h3 className="text-yellow-400 font-semibold">Public Speaking</h3>
                    <p className="text-gray-300">
                      I used to be very shy and introverted, but I have worked hard to overcome that. <br />
                      Now I am able to speak in front of large groups of people with confidence, and I am fairly extroverted <br />
                    </p>
                    <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                  </li>
                </ul>
                </div>
              </div>
          </div>

          {/* Motto and Bible Verse Section */}
          <div className="flex flex-col items-center justify-center p-6 bg-black mt-6 mb-6">
            <h2 className="text-2xl mb-3 underline underline-offset-4">Way of life:</h2>
              <ul className="relative border-l border-yellow-400 ml-4 pl-6 space-y-6">
                <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                <li> 
                  Motto
                </li>
                <p className="italic">
                  "Everything happens for a reason"
                </p>
                <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
                <li className=""> 
                  Bible Verse: 
                </li>
                <p className="italic">
                  " Exodus : 14:14 - The Lord will fight for you; you need only to be still."
                </p>
                <span className="absolute -left-2 w-4 h-4 bg-yellow-400 rounded-full"></span>
              </ul>
          </div>
        </div>
  );
}
