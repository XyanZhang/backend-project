export class ImageService {
    getImageUrl(image: string): string {
        return `/images/${image}`;
    }
}