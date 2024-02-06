export interface Weapon {
    uuid: string
    displayName: string
    category: string
    defaultSkinUuid: string
    displayIcon: string
    killStreamIcon: string
    assetPath: string
    weaponStats: WeaponStats
    shopData: ShopData
    skins: Skin[]
}

export interface WeaponStats {
    fireRate: number
    magazineSize: number
    runSpeedMultiplier: number
    equipTimeSeconds: number
    reloadTimeSeconds: number
    firstBulletAccuracy: number
    shotgunPelletCount: number
    wallPenetration: string
    feature: string
    fireMode: any
    altFireType: string
    adsStats: AdsStats
    altShotgunStats: any
    airBurstStats: any
    damageRanges: DamageRange[]
}

export interface AdsStats {
    zoomMultiplier: number
    fireRate: number
    runSpeedMultiplier: number
    burstCount: number
    firstBulletAccuracy: number
}

export interface DamageRange {
    rangeStartMeters: number
    rangeEndMeters: number
    headDamage: number
    bodyDamage: number
    legDamage: number
}

export interface ShopData {
    cost: number
    category: string
    shopOrderPriority: number
    categoryText: string
    gridPosition: GridPosition
    canBeTrashed: boolean
    image: any
    newImage: string
    newImage2: any
    assetPath: string
}

export interface GridPosition {
    row: number
    column: number
}

export interface Skin {
    uuid: string
    displayName: string
    themeUuid: string
    contentTierUuid: string
    displayIcon: string
    wallpaper: any
    assetPath: string
    chromas: Chroma[]
    levels: Level[]
}

export interface Chroma {
    uuid: string
    displayName: string
    displayIcon: any
    fullRender: string
    swatch: any
    streamedVideo: any
    assetPath: string
}

export interface Level {
    uuid: string
    displayName: string
    levelItem: any
    displayIcon: string
    streamedVideo: any
    assetPath: string
}
