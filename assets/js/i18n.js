/**
 * 网站多语言支持功能
 * Website Multilingual Support
 */

// 翻译字典 Translation dictionary
const translations = {
  'en': {
    // 导航菜单 Navigation
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-publications': 'Publications',
    'nav-photos': 'Photos',
    'nav-cv': 'CV',
    'nav-posts': 'Posts',
    
    // 首页 Home page
    'hero-greeting': 'Hello, I\'m Vector Wei',
    'hero-description': 'Welcome to my personal website',
    'recent-posts': 'Recent Posts',
    'read-more': 'Read more',
    
    // 照片页面 Photos page
    'photos-title': 'Photo Gallery',
    'graduation-album': 'SUSTech Graduation Photos',
    'back-to-categories': 'Back to Photo Categories',
    
    // 页脚 Footer
    'powered-by': 'Powered by',
    'last-updated': 'Last Updated',
    
    // 按钮和通用文本 Buttons and common text
    'language': 'Language',
    'submit': 'Submit',
    'search': 'Search'
  },
  'zh': {
    // 导航菜单 Navigation
    'nav-home': '首页',
    'nav-about': '关于',
    'nav-publications': '发表作品',
    'nav-photos': '照片',
    'nav-cv': '简历',
    'nav-posts': '博客',
    
    // 首页 Home page
    'hero-greeting': '你好，我是魏向',
    'hero-description': '欢迎访问我的个人网站',
    'recent-posts': '最新文章',
    'read-more': '阅读更多',
    
    // 照片页面 Photos page
    'photos-title': '照片库',
    'graduation-album': '南方科技大学毕业照',
    'back-to-categories': '返回照片分类',
    
    // 页脚 Footer
    'powered-by': '技术支持',
    'last-updated': '最后更新',
    
    // 按钮和通用文本 Buttons and common text
    'language': '语言',
    'submit': '提交',
    'search': '搜索'
  }
};

// 获取当前语言或默认为英文
let currentLang = localStorage.getItem('preferredLanguage') || 'en';

/**
 * 切换语言
 * @param {string} lang - 目标语言代码 ('en' 或 'zh')
 */
function switchLanguage(lang) {
  // 保存语言偏好
  currentLang = lang;
  localStorage.setItem('preferredLanguage', lang);
  
  // 更新语言切换按钮样式
  document.getElementById('lang-en').classList.toggle('lang-active', lang === 'en');
  document.getElementById('lang-zh').classList.toggle('lang-active', lang === 'zh');
  
  // 翻译所有标记的元素
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // 翻译所有标记的属性(如placeholder)
  document.querySelectorAll('[data-i18n-attr]').forEach(element => {
    const data = element.getAttribute('data-i18n-attr').split(',');
    if (data.length === 2) {
      const key = data[0];
      const attr = data[1];
      if (translations[lang][key]) {
        element.setAttribute(attr, translations[lang][key]);
      }
    }
  });

  // 触发自定义事件，以便其他脚本可以响应语言更改
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// 在页面加载完成后初始化语言
document.addEventListener('DOMContentLoaded', () => {
  // 检查URL参数是否指定了语言
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  
  if (langParam && (langParam === 'en' || langParam === 'zh')) {
    currentLang = langParam;
    localStorage.setItem('preferredLanguage', langParam);
  }
  
  // 如果未设置语言偏好，尝试使用浏览器语言
  if (!localStorage.getItem('preferredLanguage')) {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh')) {
      currentLang = 'zh';
      localStorage.setItem('preferredLanguage', 'zh');
    }
  }
  
  // 应用当前语言
  switchLanguage(currentLang);
}); 