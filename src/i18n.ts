import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      announcement: 'Free worldwide shipping on orders over $120',
      nav: { home: 'Home', shop: 'Shop', story: 'Our story' },
      common: {
        search: 'Search', cart: 'Cart', menu: 'Menu', close: 'Close',
        shopNow: 'Shop now', explore: 'Explore collection', viewAll: 'View all',
        addToCart: 'Add to cart', adding: 'Added', quantity: 'Quantity',
        size: 'Select size', unavailable: 'Unavailable', price: 'Price',
        remove: 'Remove', subtotal: 'Subtotal', checkout: 'Checkout', continueShopping: 'Continue shopping',
        filters: 'Filters', sort: 'Sort', results: 'products', clear: 'Clear all',
        learnMore: 'Learn more', back: 'Back', empty: 'Nothing here yet',
      },
      home: {
        eyebrow: 'New season · 2026',
        heroTitle: 'Everyday,\nconsidered.',
        heroBody: 'Quiet essentials made for the moments that matter — thoughtfully selected, honestly priced.',
        featured: 'A few good things',
        featuredBody: 'Pieces selected for their lasting design, useful details and effortless feel.',
        manifestoTitle: 'Buy less. Choose well. Live fully.',
        manifestoBody: 'We look beyond the trend cycle to find beautifully made essentials you will reach for every day.',
        categories: 'Shop by category',
        newsletter: 'A little inspiration, delivered.',
        newsletterBody: 'New arrivals, thoughtful stories and private offers. No noise.',
        email: 'Your email address', subscribe: 'Join the list', subscribed: 'You’re on the list — welcome.',
      },
      shop: {
        title: 'The collection', body: 'Considered essentials for work, weekends and everywhere between.',
        all: 'All', apparel: 'Apparel', accessories: 'Accessories', footwear: 'Footwear',
        sortFeatured: 'Featured', sortLow: 'Price: low to high', sortHigh: 'Price: high to low', sortRating: 'Top rated',
        noResults: 'No products match your selection.', searchPlaceholder: 'Search the collection…',
      },
      product: {
        reviews: 'reviews', fit: 'Fit & details', shipping: 'Shipping & returns',
        shippingBody: 'Complimentary worldwide shipping over $120. Returns accepted within 30 days.',
        sizeHelp: 'Size guide', selected: 'Selected', related: 'You may also like', notFound: 'Product not found.',
      },
      cart: {
        title: 'Your bag', empty: 'Your bag is waiting for something good.',
        freeShipping: 'You’ve unlocked free shipping.', away: 'away from free shipping',
        checkoutNote: 'Taxes and shipping calculated at checkout.', demo: 'Demo checkout complete — no payment was processed.',
      },
      footer: { shop: 'Shop', help: 'Help', about: 'About', shipping: 'Shipping & returns', faq: 'FAQ', privacy: 'Privacy', copy: 'Made for considered living.' },
      badge: { new: 'New', sale: 'Sale', bestseller: 'Best seller' },
    },
  },
  zh: {
    translation: {
      announcement: '订单满 $120 全球免运费',
      nav: { home: '首页', shop: '选购', story: '品牌故事' },
      common: {
        search: '搜索', cart: '购物车', menu: '菜单', close: '关闭',
        shopNow: '立即选购', explore: '探索系列', viewAll: '查看全部',
        addToCart: '加入购物车', adding: '已加入', quantity: '数量',
        size: '选择尺寸', unavailable: '暂不可选', price: '价格',
        remove: '移除', subtotal: '小计', checkout: '模拟结账', continueShopping: '继续购物',
        filters: '筛选', sort: '排序', results: '件商品', clear: '清除全部',
        learnMore: '了解更多', back: '返回', empty: '这里暂时没有内容',
      },
      home: {
        eyebrow: '2026 · 全新一季',
        heroTitle: '让每一天，\n更有质感。',
        heroBody: '为重要的日常时刻精心挑选安静、耐用的生活单品，以诚实价格呈现好设计。',
        featured: '值得拥有的好物',
        featuredBody: '兼顾长久设计、实用细节与轻松体验的精选单品。',
        manifestoTitle: '买得更少，选得更好，生活更丰盛。',
        manifestoBody: '我们不追逐短暂潮流，只寻找制作精良、每天都愿意使用的日常必需品。',
        categories: '按分类选购',
        newsletter: '让灵感准时抵达。',
        newsletterBody: '新品、生活故事和会员专属优惠，恰到好处。',
        email: '输入邮箱地址', subscribe: '订阅邮件', subscribed: '订阅成功，欢迎加入。',
      },
      shop: {
        title: '全系列商品', body: '为工作、周末及日常生活精选的实用单品。',
        all: '全部', apparel: '服装', accessories: '配饰', footwear: '鞋履',
        sortFeatured: '精选推荐', sortLow: '价格从低到高', sortHigh: '价格从高到低', sortRating: '评分最高',
        noResults: '没有符合当前条件的商品。', searchPlaceholder: '搜索商品…',
      },
      product: {
        reviews: '条评价', fit: '版型与细节', shipping: '配送与退货',
        shippingBody: '满 $120 全球免运费，支持 30 天内退货。',
        sizeHelp: '尺寸指南', selected: '已选择', related: '你可能也喜欢', notFound: '未找到该商品。',
      },
      cart: {
        title: '购物袋', empty: '购物袋还是空的，去发现一些好物吧。',
        freeShipping: '你已获得免运费资格。', away: '即可享受免运费',
        checkoutNote: '税费及配送费用将在结账时计算。', demo: '模拟结账完成，本次不会产生真实付款。',
      },
      footer: { shop: '选购', help: '帮助', about: '关于我们', shipping: '配送与退货', faq: '常见问题', privacy: '隐私政策', copy: '为有质感的日常生活而做。' },
      badge: { new: '新品', sale: '折扣', bestseller: '畅销' },
    },
  },
}

const savedLanguage = localStorage.getItem('lumina-language')

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage === 'zh' ? 'zh' : 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
