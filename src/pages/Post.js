import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Post = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          publishedAt,
          shortDescription,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div>
      <section className="bg-yellow-50 py-10 mb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-0">
          <div className="flex items-center">
              <img
                src={urlFor(postData.authorImage).width(100).url()}
                alt= {`Author is ${postData.name}`}
                className="w-12 mr-3 rounded-full"
              />
              <h4>by <span className="font-semibold">{postData.name}</span> on <span className="font-semibold">{postData.publishedAt}</span></h4>
          </div>

          <div className="my-5">
            <h1 className="text-5xl mb-4">{postData.title}</h1>
            <p className="text-lg text-gray-600">{postData.shortDescription}</p>
          </div>

          <div>
            <span className="font-semibold text-gray-600">Share:</span>
          </div>
        </div>
      </section>

      <div className="xl:w-2/3 mx-auto mb-10 xl:mb-14 h-48 xl:h-96 overflow-h px-4 sm:px-0 overflow-hidden">
        <img 
          src={urlFor(postData.mainImage).url()} 
          alt={`${postData.title}`} 
          className="object-cover w-full rounded-lg h-full"
        />
      </div>


      <div className="container max-w-3xl mx-auto px-4 sm:px-0">
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>
    </div>
  );
}

export default Post;