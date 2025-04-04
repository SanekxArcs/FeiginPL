import PageTopSection from "@/app/components/PageTopSection";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/client";
import { sanityFetch } from "@/sanity/live";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { CircleChevronLeft } from "lucide-react";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import {Link} from "next-view-transitions";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const POST_QUERY = defineQuery(`*[
  _type == "post" &&
  slug.current == $slug
][0]{
  title,
  slug,
  publishedAt,
  mainImage,
  images,
  body[]{
    ...,
    _type == "image" => {
      ...,
      "asset": asset->{
        url,
        metadata
      }
    }
  },
  tags
}`);

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  const { title, publishedAt, mainImage, body, tags } = post;
  const mainImageUrl = mainImage
    ? urlFor(mainImage)?.width(800).height(400).url()
    : null;
  const formattedDate = new Date(publishedAt).toLocaleDateString("pl-PL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const components = {
    types: {
      image: ({ value }: { value: SanityImageSource }) => {
        const imageUrl = urlFor(value)?.width(600).url();
        return (
          <div className="my-4">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt="Embedded image"
                width={600}
                height={400}
                className="rounded-lg mx-auto"
              />
            )}
          </div>
        );
      },
    },
  };

  return (
    <>
      {title && <PageTopSection title={title} description="" />}
      <main className="container mx-auto px-4 md:px-6 lg:px-12 py-8 grid gap-10">
        <div className="">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="hover:bg-gray-200 shadow text-gray-700"
            >
              <CircleChevronLeft /> Wróć do blogu
            </Button>
          </Link>
        </div>
        <div className="grid items-start gap-8 md:gap-12 lg:gap-16 lg:grid-cols-2">
          <div className="h-full w-full">
            {mainImageUrl && (
            <Image
              id="mainImage"
              src={mainImageUrl}
              alt={title || "Post"}
              className="mx-auto aspect-video rounded-xl object-cover object-center w-full md:max-w-lg lg:max-w-none sticky top-8"
              height={560}
              width={560}
              style={{ viewTransitionName: `image-${title}` }}
            />
          )}
          </div>
          
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              {/* {title && (
                <h1 className="text-2xl md:text-4xl font-bold tracking-tighter mb-4 md:mb-8">
                  {title}
                </h1>
              )} */}
              {formattedDate && (
                <div className="text-sm text-gray-500 md:text-base">
                  Publikowane: {formattedDate}
                </div>
              )}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag: string) => (
                    <Badge className="px-1 py-0.5 bg-fgreen-100" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            {body && (
              <div className="prose max-w-none prose-sm md:prose-base lg:prose-lg">
                <PortableText value={body} components={components} />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center mx-auto">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="hover:bg-gray-200 shadow text-gray-700"
            >
              <CircleChevronLeft /> Wróć do blogu
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}
