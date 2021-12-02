import React from "react";
import { Link } from "react-router-dom";

import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";

import { PrimaryButton } from '../atoms';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}

const Category = ({ category }) => {
	return (
		<article className="group flex flex-col shadow-lg h-full bg-white rounded-xl overflow-hidden">
			<div class="aspect-w-16 aspect-h-9">
				<img
					src={urlFor(category.image).url()}
					alt={category.title}
					className="group w-full h-full object-center object-cover"
				/>
			</div>

			<div className="p-6 flex-grow">
				<h2 className="text-lg font-semibold mb-1">{category.title}</h2>
				<p className="pb-4">{category.description}</p>
				<Link to={"/category/" + category.slug.current}>
					<PrimaryButton>
						View all
					</PrimaryButton>
				</Link>
			</div>
		</article>
	);
};

export default Category;