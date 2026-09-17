// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-misc",
          title: "misc",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/misc/";
          },
        },{id: "post-some-random-thoughts-at-cal-east-asian-library",
        
          title: 'Some Random Thoughts at Cal East Asian Library <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A candid reflection on transfer applications, summer research, and the quiet gap between achievement and joy",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.notion.so/Written-at-the-UC-Berkeley-East-Asian-Library-6ea2211b1d4082caa6fc0177f23ff547", "_blank");
          
        },
      },{id: "post-why-we-study-fundamental-math-question-in-ai-era",
        
          title: "Why We Study Fundamental Math Question in AI Era",
        
        description: "A conversation about learning fundamentals in the age of fast-moving AI",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/why-we-study-fundamental-math-question-in-ai-era/";
          
        },
      },{id: "post-why-accessibility-a-personal-reflection-chinese-version",
        
          title: 'Why Accessibility? A Personal Reflection (Chinese Version) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.xiaohongshu.com/explore/68d3b51b00000000120144f0?xsec_token=ABai1cH5NPNorvHJQqZFW6i96Aaxm6WkcD2nbpahBN7uU=&xsec_source=pc_user", "_blank");
          
        },
      },{id: "post-masaki-kuribayashi-39-s-interview-waseda-university",
        
          title: 'Masaki Kuribayashi&#39;s Interview (Waseda University) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "An interview with Masaki Kuribayashi conducted by Synteraction Lab",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.notion.so/Masaki-Kuribayashi-Interview-2482211b1d408083aefac64b4bd4bcc7?source=copy_link", "_blank");
          
        },
      },{id: "news-accepted-summer-research-offer-from-notre-dame-looking-forward-to-being-mentored-by-toby-li",
          title: 'Accepted Summer Research offer from Notre Dame; looking forward to being mentored by...',
          description: "",
          section: "News",},{id: "news-joined-the-cmu-hcii-learn-lab-program-supported-by-student-funding",
          title: 'Joined the CMU HCII Learn Lab Program, supported by Student Funding',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%69%75%78%75%6A%69%61%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/xujia-liu-282575339", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/liuxujia85", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
