import type { Product } from '../types'

const clothingSizes = [
  { label: 'XS', priceAdjustment: 0, available: true },
  { label: 'S', priceAdjustment: 0, available: true },
  { label: 'M', priceAdjustment: 4, available: true },
  { label: 'L', priceAdjustment: 6, available: true },
  { label: 'XL', priceAdjustment: 8, available: false },
]

const shoeSizes = [
  { label: '36', priceAdjustment: 0, available: true },
  { label: '37', priceAdjustment: 0, available: true },
  { label: '38', priceAdjustment: 3, available: true },
  { label: '39', priceAdjustment: 3, available: true },
  { label: '40', priceAdjustment: 5, available: false },
]

const accessorySizes = [
  { label: 'Mini', priceAdjustment: 0, available: true },
  { label: 'Regular', priceAdjustment: 12, available: true },
  { label: 'Large', priceAdjustment: 24, available: true },
]

export const products: Product[] = [
  {
    id: 'p01', slug: 'everyday-structured-tee', category: 'apparel', price: 48, rating: 4.9, reviews: 126, badge: 'bestseller', featured: true,
    name: { en: 'Everyday Structured Tee', zh: '日常廓形短袖' },
    description: { en: 'A substantial organic cotton tee with a clean, relaxed silhouette.', zh: '选用厚实有机棉，呈现干净利落的宽松廓形。' },
    details: [{ en: 'Heavyweight organic cotton jersey', zh: '厚实有机棉针织面料' }, { en: 'Relaxed unisex fit', zh: '宽松中性版型' }, { en: 'Made for repeat wear', zh: '耐穿且易于日常搭配' }], sizes: clothingSizes,
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1200&q=85'],
  },
  {
    id: 'p02', slug: 'soft-form-overshirt', category: 'apparel', price: 96, originalPrice: 124, rating: 4.8, reviews: 84, badge: 'sale', featured: true,
    name: { en: 'Soft Form Overshirt', zh: '柔软廓形衬衫' },
    description: { en: 'An easy layer with a softly structured shape and tactile finish.', zh: '柔和有型的轻薄外搭，兼具细腻触感与实穿性。' },
    details: [{ en: 'Brushed cotton blend', zh: '磨毛棉混纺面料' }, { en: 'Dropped shoulder', zh: '落肩剪裁' }, { en: 'Two utility pockets', zh: '双实用口袋设计' }], sizes: clothingSizes,
    images: ['https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1608234807905-4466023792f5?auto=format&fit=crop&w=1200&q=85'],
  },
  {
    id: 'p03', slug: 'weekend-knit-polo', category: 'apparel', price: 82, rating: 4.7, reviews: 63, badge: 'new', featured: true,
    name: { en: 'Weekend Knit Polo', zh: '周末针织 Polo' },
    description: { en: 'Breathable fine-knit texture with an open collar and easy drape.', zh: '透气细针织质感，搭配开放式领口与自然垂坠感。' },
    details: [{ en: 'Soft cotton knit', zh: '柔软棉质针织' }, { en: 'Open collar', zh: '开放式领口' }, { en: 'Lightweight feel', zh: '轻盈舒适体感' }], sizes: clothingSizes,
    images: ['https://images.unsplash.com/photo-1625910513413-5fc45e7c2008?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=85'],
  },
  {
    id: 'p04', slug: 'relaxed-canvas-trouser', category: 'apparel', price: 88, rating: 4.6, reviews: 49,
    name: { en: 'Relaxed Canvas Trouser', zh: '休闲帆布长裤' },
    description: { en: 'A relaxed straight-leg trouser built for daily movement.', zh: '适合日常活动的宽松直筒长裤，舒适且有型。' },
    details: [{ en: 'Washed cotton canvas', zh: '水洗棉质帆布' }, { en: 'Straight leg', zh: '直筒裤型' }, { en: 'Flexible waistband', zh: '灵活舒适腰头' }], sizes: clothingSizes,
    images: ['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=85'],
  },
  {
    id: 'p05', slug: 'city-carry-tote', category: 'accessories', price: 68, rating: 4.9, reviews: 202, badge: 'bestseller', featured: true,
    name: { en: 'City Carry Tote', zh: '城市通勤托特包' },
    description: { en: 'A structured everyday carry with room for all the essentials.', zh: '兼具挺括外形与充足容量，轻松收纳每日所需。' },
    details: [{ en: 'Durable cotton canvas', zh: '耐用棉质帆布' }, { en: 'Internal laptop sleeve', zh: '内置电脑隔层' }, { en: 'Reinforced handles', zh: '加固手柄' }], sizes: accessorySizes,
    images: ['https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85'],
  },
  {
    id: 'p06', slug: 'studio-daypack', category: 'accessories', price: 112, rating: 4.8, reviews: 78, badge: 'new',
    name: { en: 'Studio Daypack', zh: '轻量日用双肩包' },
    description: { en: 'A minimal daypack designed around work, travel and the in-between.', zh: '围绕工作、旅行与日常通勤打造的极简双肩包。' },
    details: [{ en: 'Water-resistant shell', zh: '防泼水外层' }, { en: 'Padded 15-inch sleeve', zh: '15 英寸加厚电脑隔层' }, { en: 'Hidden valuables pocket', zh: '隐藏式贵重物品袋' }], sizes: accessorySizes,
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1200&q=85'],
  },
  {
    id: 'p07', slug: 'field-cap', category: 'accessories', price: 36, rating: 4.7, reviews: 92,
    name: { en: 'Field Cap', zh: '日常户外帽' },
    description: { en: 'A low-profile six-panel cap in softly washed cotton twill.', zh: '低帽型六片帽设计，采用柔软水洗棉斜纹面料。' },
    details: [{ en: 'Washed cotton twill', zh: '水洗棉斜纹面料' }, { en: 'Adjustable back', zh: '可调节后扣' }, { en: 'Embroidered mark', zh: '精致刺绣标识' }], sizes: [{ label: 'S/M', priceAdjustment: 0, available: true }, { label: 'L/XL', priceAdjustment: 4, available: true }],
    images: ['https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1200&q=85'],
  },
  {
    id: 'p08', slug: 'minimal-dial-watch', category: 'accessories', price: 148, originalPrice: 176, rating: 4.8, reviews: 108, badge: 'sale',
    name: { en: 'Minimal Dial Watch', zh: '极简表盘腕表' },
    description: { en: 'An understated timepiece with a precise Japanese movement.', zh: '克制简约的日常腕表，搭载精准日本机芯。' },
    details: [{ en: 'Japanese quartz movement', zh: '日本石英机芯' }, { en: 'Mineral crystal face', zh: '矿物玻璃表镜' }, { en: 'Water resistant to 30m', zh: '30 米生活防水' }], sizes: [{ label: '36mm', priceAdjustment: 0, available: true }, { label: '40mm', priceAdjustment: 18, available: true }],
    images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=85'],
  },
  {
    id: 'p09', slug: 'court-01-sneaker', category: 'footwear', price: 118, rating: 4.9, reviews: 164, badge: 'bestseller', featured: true,
    name: { en: 'Court 01 Sneaker', zh: 'Court 01 休闲鞋' },
    description: { en: 'A clean everyday sneaker with considered cushioning and grip.', zh: '线条干净的日常休闲鞋，兼顾缓震表现与抓地力。' },
    details: [{ en: 'Responsibly sourced leather', zh: '负责任来源皮革' }, { en: 'Cushioned footbed', zh: '缓震鞋垫' }, { en: 'Natural rubber outsole', zh: '天然橡胶外底' }], sizes: shoeSizes,
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85'],
  },
  {
    id: 'p10', slug: 'trail-lite-runner', category: 'footwear', price: 132, rating: 4.7, reviews: 71, badge: 'new',
    name: { en: 'Trail Lite Runner', zh: 'Trail 轻量跑鞋' },
    description: { en: 'A light, responsive runner made for city routes and weekend trails.', zh: '轻盈回弹，适合城市跑步路线与周末轻户外。' },
    details: [{ en: 'Breathable mesh upper', zh: '透气网布鞋面' }, { en: 'Responsive foam midsole', zh: '回弹泡棉中底' }, { en: 'High-traction sole', zh: '高抓地力外底' }], sizes: shoeSizes,
    images: ['https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=85'],
  },
  {
    id: 'p11', slug: 'everyday-slip-on', category: 'footwear', price: 92, rating: 4.6, reviews: 58,
    name: { en: 'Everyday Slip-On', zh: '日常便鞋' },
    description: { en: 'An unfussy slip-on that moves easily from indoors to out.', zh: '简洁轻松的套脚便鞋，自如连接室内与户外场景。' },
    details: [{ en: 'Soft suede upper', zh: '柔软绒面鞋面' }, { en: 'Elastic side panels', zh: '弹力侧边设计' }, { en: 'Flexible sole', zh: '柔韧鞋底' }], sizes: shoeSizes,
    images: ['https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=85'],
  },
  {
    id: 'p12', slug: 'movement-sandal', category: 'footwear', price: 76, rating: 4.5, reviews: 41,
    name: { en: 'Movement Sandal', zh: '轻量机能凉鞋' },
    description: { en: 'A supportive warm-weather sandal with adjustable technical straps.', zh: '适合温暖季节的支撑型凉鞋，配备可调节机能织带。' },
    details: [{ en: 'Adjustable webbing', zh: '可调节织带' }, { en: 'Contoured footbed', zh: '贴合足弓鞋床' }, { en: 'Lightweight outsole', zh: '轻量外底' }], sizes: shoeSizes,
    images: ['https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1200&q=85'],
  },
]

export const getProductById = (id: string) => products.find((product) => product.id === id)
export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug)
