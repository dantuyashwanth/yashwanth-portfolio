/**
 * ---------------------------------------------------------------------------
 * ASSET REGISTRY
 * ---------------------------------------------------------------------------
 * One place to manage all portfolio assets.
 * ---------------------------------------------------------------------------
 */

export const assets = {
  /**
   * Cartoon face used in the hero.
   */
  heroFace: {
  flat: '/assets/cartoon-face.png',
  layers: null as {
    base: string
    eyes: string
    lids: string
    mouth: string
  } | null,
},

  /**
   * Section 02 animated AI/ML artwork.
   *
   * Video location:
   * public/assets/yashwanth-video.mp4
   */
  frame: {
    video: '/assets/yashwanth-video.mp4' as string | null,
    poster: null as string | null,
    image: null as string | null,
    fit: 'cover' as 'cover' | 'contain',
    position: '50% 50%',
    key: null as { low: number; high: number } | null,
  },

  /**
   * Your cut-out photo.
   */
  nameCutout: {
    src: '/assets/yashwanth.png' as string | null,
    width: 1024,
    height: 1457,
    sticker: false,
  },

  /**
   * Contact avatar.
   */
  avatar: '/assets/avatar.webp' as string | null,

  /**
   * Project images.
   */
  studio: [
    '/assets/projects/studio-01.webp',
    '/assets/projects/studio-02.webp',
    '/assets/projects/studio-03.webp',
  ] as (string | null)[],

  /**
   * Footer signature.
   */
  signature: null as string | null,
} as const
