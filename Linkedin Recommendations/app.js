// local reviews data
const reviews = [
  {
    id: 1,
    name: "Bennie Kingwood",
    job: "Sr. UI DeveloperSr. UI Developer at Yahoo",
    img: "./images/profile1.jpg",
    text:
      "I have worked with Nancy at Yahoo on the Ad Platform UI team for over a year now, and I can say she has been a pleasure to work alongside. Nancy has a positive energy, and is always first to volunteer for the larger tasks, a lot of time having little to no support but always completed on time. \r\n\r\n Nancy’s attention to detail, and creativity always helped us to push the product to go beyond our client’s needs. Nancy is an invaluable partner to have for any project.",
  },
  {
    id: 2,
    name: "Eric Fair",
    job:
      "Product Manager, Media Planning, Amazon AdvertisingProduct Manager, Media Planning, Amazon Advertising at Amazon",
    img: "./images/profile2.jpg",
    text:
      'Nancy is diligent, collaborative and an awesome team member. I have worked with her on several projects where she made significant contributions. \r\n\r\n Her ease of communication and positive attitude eliminated timezone and geographic hurdles, and her attention to detail and a "get the job done" mindset helped these projects cross the finish line successfully and on time! Most recently, Nancy manage to complete a full re-branding of a large scale advertising application in a compressed time scale with little fuss and a great outcome, which would not have been possible without her involvement.',
  },
  {
    id: 3,
    name: "M Wasfi",
    job: "Head of ProductHead of Product at Intouch.com",
    img: "./images/profile3.jpg",
    text:
      "‘Ridiculously efficient’ is the phrase that comes to mind when I think about Nancy. At Oath, working in Product Management, I had the pleasure of collaborating with Nancy where she was my primary UX contact. \r\n\r\nAs I'm based in Dublin and she's based in Sunnyvale, I was particularly impressed by her communication skills and ability to work across time zones and on the toughest of deadlines—effortlessly. That skill often takes years to develop, but it seemed to come perfectly naturally to her. Nancy is an asset to any team.",
  },
  {
    id: 4,
    name: "Sam Cheung",
    job:
      "Software Development Engineer, SrSoftware Development Engineer, Sr at Yahoo! Inc",
    img: "./images/profile4.jpg",
    text:
      "I worked with Nancy frequently and she was amazing. She was always willing to listen with anything that I had questions about and helped me solve them. Nancy was the primary driver for a huge re-branding of an old system that desperately needed a face lift. She worked closely with PMs, UX designers, and users to cover many edge cases and to provide an easier-to-use application. She took a monstrous task and created a beautiful result even on a tight deadline. \r\n\r\nI believe Nancy is a person who would benefit any team and I very much enjoy working with her. Her hard work and personality bring a special spark for any team.",
  },
  {
    id: 5,
    name: "James Alley",
    job: "Senior Product Manager, Yahoo Mail at Yahoo",
    img: "./images/profile5.jpg",
    text:
      "I can trust Nancy to complete complicated UI tasks with excellent attention to detail. She’s proven she can follow Norrin conventions, achieve good test coverage, and respond promptly (and gracefully) to feedback. I wish everyone displayed these characteristics, but in fact she’s a standout in this respect. She’s conscientious about her work. Also, I don’t see her trying to sneak anything in under the radar. She seeks out copious feedback, she checks with all stakeholders before issuing a PR, and is careful to be sure the result is spot-on before merging. \r\n\r\nAgain, I don’t always see others displaying this kind of behavior, so I appreciate it.",
  },
  {
    id: 6,
    name: "Jayvic San Antonio",
    job: "Software Development Engineer at Yahoo! Inc.",
    img: "./images/profile6.jpg",
    text:
      "Few people have the opportunity to collaborate to a UX/UI engineer who is also a friend and mentor - but I did when I worked with Nancy. I have worked alongside Nancy for close to two years. I have learned a lot about CSS from her and she has been kind and patient with me during the times when I could not find my way around CSS. \r\n\r\nAlso, Nancy was the one who worked on our product rebranding. She did all the heavy lifting by herself with fast execution and high quality, as we had a very tight deadline. Everyone was impressed by the amount of work that had been done in a very short period of time. What she brought to the team was invaluable. \r\n\r\nBeing one of the greatest motivators I have met, Nancy is my “go to person” when I have problems or decisions I need to make. She also makes the office cheerful with her great sense of humor. Nancy is a great person, and her employer will be lucky to have her.",
  },
  {
    id: 7,
    name: "LALLO LEMOS",
    job: "Lead Visual Designer at ZillowGroup",
    img: "./images/profile7.jpg",
    text:
      "I worked closely with Nancy at Yahoo implementing the new AdTech Platform Design and introducing a mobile version of it. On top of that Nancy was also a key collaborator establishing a live Style guide and its components. \r\n\r\nAnyone who works with Nancy can attest to her efficient and effective communication, creative thinking, professionalism and ethical conduct. \r\n\r\nNancy combines a broad knowledge with in-depth insight of the essential aspects of solutions and she went as far as developing her UX skills to better understand issues that would come up during our Design process. Nancy is a dedicated professional always willing to help others achieve their goals, I would work with her anytime in a blink of an eye.",
  },
  {
    id: 8,
    name: "Brad Samuelson",
    job: "Sr. UX Designer/Engineer & Cartoonist at Sr UX Engineer at VideoAmp",
    img: "./images/profile8.jpg",
    text:
      "I've had the pleasure of working with Nancy for over a year at Oath(Yahoo/AOL). Her enthusiasm and positive attitude were extremely helpful in a difficult situation of combining teams from Yahoo and AOL. \r\n\r\nHer expertise and attention to detail with regard to front-end technology helped drive progress and innovation in multiple products. It was always great to get the chance to work with her in person, but being in a different office on the other side of the country never prevented her from helping out and offering guidance to team members whenever she could. \r\n\r\nNancy has a rare excitement around learning new things and stepping outside of her comfort zone. She was eager to try on new hats and help out the team in any way she could. \r\n\r\nAll of these traits along with her naturally positive personality and sense of humor made her an extremely valuable part of the team.",
  },
  {
    id: 9,
    name: "Magdalene Wai Leng",
    job: "Staff Software Engineer - Fullstack at ShopBack",
    img: "./images/profile9.jpg",
    text:
      "Nancy really knows her way around front end stuff. From having meaningful UX to having a good user experience, Nancy is able to build out user friendly views. She is also very patient. \r\n\r\nWhen I was new to Yahoo she carefully and patiently expounded on the fine nuances of the BEM CSS system, the best practices at Yahoo for implementing user views. She demonstrated great interpersonal skills in communicating between stakeholders such as Product Owners, UX Designers, Engineering Managers and Engineers. \r\n\r\nIt was my great pleasure to work alongside her and even more fortunately for me I got to sit beside her. I would love to have Nancy as my co-worker again, who knows if fate (or a common employer) will reunite us! :D",
  },
  {
    id: 10,
    name: "Josh Clark",
    job: "Senior Director, Product Design at VideoAmp",
    img: "./images/profile10.jpg",
    text:
      "Nancy is an incredibly knowledgeable, passionate team player! Her engineering skills helped to bring designs to fruition, and her eye for design really helped to ensure excellent implementation across a variety of design solutions. \r\n\r\nShe exudes a contagious level of excitement, resulting in an effective, collaborative team dynamic. We worked together remotely, but it often felt like we worked at desks right next to each other. Nancy also pays close attention to details like well structured, semantic HTML/CSS, and makes sure that her designs work well across browsers and various platforms. \r\n\r\nOverall, Nancy is a very talented, phenomenal team member!",
  },
  {
    id: 11,
    name: "Lucia Chen",
    job: "Principal product designer at Yahoo!",
    img: "./images/profile11.jpg",
    text:
      "What really sets Nancy apart when resolving mail bugs is the complete ownership of the bug. She would see it from beginning to end not just on the engineer side, but will reach out to the designer side to make sure the bug is completely fixed. This is very admirable and is a much needed trait as it shows that she is an excellent team player; not just within a team, but with other teams as well.\r\n\r\n" +
      "Nancy is an extremely hard worker. Her work ethic and attitude can be considered second to none. She is always wanting to solve problems, even on her own time during weekends. \r\n\r\nHighly motivated to take responsibility in making things work better. She does not hesitate to spend her own time in producing quality results. All of her work shows that she has spent time and energy to produce. Nancy is always willing to do what she can and not limit herself in anyway. She also does not hesitate to reach out and ask questions, another wonderful quality.\r\n\r\n" +
      "Nancy is always wanting to learn not just on what her role entails, but also outside her role. I really enjoy working with Nancy because she is always working closely with the design team, learning what the designers have to work with, and then incorporating that knowledge into the engineer side of work. \r\n\r\nNancy is one of the few engineers who wants to understand the design so that the project can be completed successfully. This also shows that Nancy has the desire to grow, as she’s constantly learning more about the design aspect of the project. Not only that, but this also shows that she has great attention to detail because this knowledge she is getting about the design help provide the detail she will most likely need when working on the coding side of the project.",
  },
  {
    id: 12,
    name: "Jin Seok Park",
    job: "Visual designerVisual designer at Intuit",
    img: "./images/profile12.jpg",
    text:
      "Nancy has huge passion for good UI and alway try to improve it. She drove the effort for different initiatives, she does whatever it takes to get it done, working along with PMs, UX, engineers. She builds prototype, then start working on the implementation and have a tremendous impact on the UI/UX for the product she works on!.\r\n\r\nNancy very active on attending training and classes, also shares this information with team. Her killer instinct of being always eager to learn, keeps her moving forward in her career. Nice jovial person in the team.",
  },
  {
    id: 13,
    name: "Ling Lim",
    job: "Design Manager, Angel Investor at Carta",
    img: "./images/profile13.jpg",
    text:
      "I have worked with Nancy directly for 2 years now. Nancy has been an incredible counterpart to work with. As a UX designer, it is sometimes challenging to find UX architects who understand your design direction and executes your designs with ease. \r\n\r\nNancy is one such example. She is proactive at picking up UX and technical instructions and delivers her work with exceptional quality; that is coupled with enthusiasm and her winning positive personality! Nancy stood out for her skills in accessibility and SEO. She has been a great liaison between the work on our team and our collaboration with our accessibility lab. She contacted targeted users for direct feedback and has been improving our product by implementing it! 10/10 loved working with her.",
  },
  {
    id: 2,
    name: "name again",
    job: "job again",
    img: "./images/profile.jpg",
    text: "",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
let info = document.getElementById("info");

info.setAttribute("style", "white-space: break-spaces;");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.setAttribute("style", "white-space: break-spaces;");

  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
