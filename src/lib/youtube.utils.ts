export class YoutubeUtils {
  static extractYoutubeId(youtubeUrl: string): string {
    const d = youtubeUrl.match(/\?v\=(.*)$/);

    if (d != null && d.length > 1) {
      return d[1];
    }

    return '';
  }

  static isYoutubeLink(link: string): boolean {
    return link.includes('www.youtube.com');
  }

  static toYoutubeImg(youtubeId: string) {
    // might get black border if oyu take 0.jpg, theory.
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  }
}
