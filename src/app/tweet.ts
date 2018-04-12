export class Tweet {
  id: number;
  message: string;
  published: string;
  tags: string[];
  mentions: string[];
  likes: string[];
  tweetedByString: string;
  tweetedBy_url: string;
  tweetedBy_fullname: string;
  hasBeenLiked: boolean;

  constructor(id: number,
              message: string,
              published: string,
              tags: string[],
              tweetedByString: string,
              tweetedBy_url: string,
              mentions: string[],
              likes: string[],
              tweetedBy_fullname: string,
              hasBeenLiked: boolean) {
    this.message = message;
    this.published = published;
    this.tags = tags;
    this.tweetedByString = tweetedByString;
    this.tweetedBy_url = tweetedBy_url;
    this.mentions = mentions;
    this.likes = likes;
    this.id = id;
    this.tweetedBy_fullname = tweetedBy_fullname;
    this.hasBeenLiked = hasBeenLiked;
  }
}
