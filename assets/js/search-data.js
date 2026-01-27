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
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-why-i-came-to-study-in-the-us",
        
          title: "Why I Came to Study in the US",
        
        description: "A reflection on my journey and motivations for studying in the United States",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/why-i-came-to-study-in-the-us/";
          
        },
      },{id: "post-why-accessibility-a-personal-reflection-chinese-version",
        
          title: 'Why Accessibility? A Personal Reflection (Chinese Version) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Reflections from a Transfer Essay on the importance of accessibility",
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
      },{id: "post-my-hci-summer-camp-application",
        
          title: "My HCI Summer Camp Application",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/my-hci-summer-camp-application/";
          
        },
      },{id: "news-admitted-to-hci-program-heading-to-suzhou",
          title: 'Admitted to HCI+ Program, heading to Suzhou',
          description: "",
          section: "News",},{id: "news-attended-chiang-mai-hci-research-camp-organized-by-prof-shengdong-zhao",
          title: 'Attended Chiang Mai HCI Research Camp, organized by Prof: Shengdong Zhao',
          description: "",
          section: "News",},{id: "news-received-transfer-admission-from-uw-madison",
          title: 'Received Transfer Admission from UW-Madison',
          description: "",
          section: "News",},{id: "news-starting-exchange-life-at-uc-berkeley",
          title: 'Starting Exchange Life at UC Berkeley',
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
        id: 'social-custom_social_xiaohongshu',
        title: 'Custom_social_xiaohongshu',
        section: 'Socials',
        handler: () => {
          window.open("https://www.xiaohongshu.com/user/profile/66ee6a82000000001e0060f4", "_blank");
        },
      },{
        id: 'social-custom_social_wechat',
        title: 'Custom_social_wechat',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/None-Momo/My-Wechat/blob/main/Wechat.jpg", "_blank");
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
