<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
	const split: null | NodeListOf<HTMLSpanElement> = document.querySelectorAll('.split span');
	if (split) {
		gsap.to(split, {
			y: "-0.1em",
			duration: 0.5,
			stagger: 0.2,
		})
		gsap.to(split, {
			autoAlpha: 1,
			stagger: 0.2,
		})
	}
})

const feedbackList = [
	'communication',
	'revisions',
	'punctuality',
	'output'
]

const addCSS = (s: string) => document.head.appendChild(document.createElement("style")).innerHTML = s;

feedbackList.forEach(x => {
	addCSS(`.rating-${x}>input.input${x}:checked~label.${x}, .rating-${x}:not(:checked)>label.${x}:hover, .rating-${x}:not(:checked)>label.${x}:hover~label.${x} {
		color: #FFD700;
	}`);
})

useHead({
	title: 'COMOMAYA - Feedback',
	meta: [
		{
			name: 'COMOMAYA',
			content: 'Feedback',
		},
	],
})

</script>

<template>
	<main class="bg-black mx-auto flex flex-col justify-center pt-10 md:pt-20">
		<section class="flex flex-col mx-auto justify-center min-h-[40vh] pt-10">
			<h2 class="text-active mx-5 md:mx-0 font-semibold tracking-widest mb-3">FEEDBACK</h2>
			<h1 class="split mx-5 md:mx-0 max-w-4xl text-white text-4xl md:text-9xl font-semibold overflow-hidden">
				<span>Tell</span><span>us</span>
				<span>how</span><span>to</span><span>be</span><span>better...</span>
			</h1>
		</section>
		<section class="md:py-52 py-32 md:mx-52 flex md:flex-row mx-10 flex-col">
			<span class="mr-5 md:w-1/3">
				<p class="text-active font-semibold tracking-widest mb-3">GIVE US A CALL</p>
				<a class="z-10" href="tel:+6594245994">
					<p class="text-white font-semibold mb-5">+65 9424 5994</p>
				</a>
				<p class="text-active font-semibold tracking-widest mb-3">WHATSAPP US</p>
				<a class="z-10" target="_blank" rel="noopener noreferrer" href="https://wa.me/6594245994">
					<p class="text-white font-semibold mb-5">+65 9424 5994</p>
				</a>
				<p class="text-active font-semibold tracking-widest mb-3">WRITE TO US</p>
				<a class="z-10" href="mailto:ridhisain@comomaya.com">
					<p class="text-white font-semibold mb-5">ridhisain@comomaya.com</p>
				</a>
			</span>

			<form action="https://formspree.io/f/mknawlge" method="POST" class="flex flex-wrap md:w-2/3 content-start">
				<div class="relative flex flex-col justify-start mr-10 mb-3 w-full" v-for="types in feedbackList">
					<p class="text-active mr-5 md:mx-0 font-semibold tracking-widest">{{ types.toUpperCase() }}</p>
					<fieldset :class="`rating-${types}`">
						<input type="radio" :class="`input${types}`" :id="`star5${types}`" :name="`${types}_rating`" value="5" />
						<label class="full" :class="types" :for="`star5${types}`" title="Awesome - 5 stars" />
						<input type="radio" :class="`input${types}`" :id="`star4half${types}`" :name="`${types}_rating`" value="4 and a half" />
						<label class="half" :class="types" :for="`star4half`" title="Pretty good - 4.5 stars" />
						<input type="radio" :class="`input${types}`" :id="`star4${types}`" :name="`${types}_rating`" value="4" />
						<label class="full" :class="types" :for="`star4${types}`" title="Pretty good - 4 stars" />
						<input type="radio" :class="`input${types}`" :id="`star3half${types}`" :name="`${types}_rating`" value="3 and a half" />
						<label class="half" :class="types" :for="`star3half${types}`" title="Meh - 3.5 stars" />
						<input type="radio" :class="`input${types}`" :id="`star3${types}`" :name="`${types}_rating`" value="3" />
						<label class="full" :class="types" :for="`star3${types}`" title="Meh - 3 stars" />
						<input type="radio" :class="`input${types}`" :id="`star2half${types}`" :name="`${types}_rating`" value="2 and a half" />
						<label class="half" :class="types" :for="`star2half${types}`" title="Kinda bad - 2.5 stars" />
						<input type="radio" :class="`input${types}`" :id="`star2${types}`" :name="`${types}_rating`" value="2" />
						<label class="full" :class="types" :for="`star2${types}`" title="Kinda bad - 2 stars" />
						<input type="radio" :class="`input${types}`" :id="`star1half${types}`" :name="`${types}_rating`" value="1 and a half" />
						<label class="half" :class="types" :for="`star1half${types}`" title="Meh - 1.5 stars" />
						<input type="radio" :class="`input${types}`" :id="`star1${types}`" :name="`${types}_rating`" value="1" />
						<label class="full" :class="types" :for="`star1${types}`" title="Sucks big time - 1 star" />
						<input type="radio" :class="`input${types}`" :id="`starhalf${types}`" :name="`${types}_rating`" value="half" />
						<label class="half" :class="types" :for="`starhalf${types}`" title="Sucks big time - 0.5 stars" />
					</fieldset>
				</div>
				<span class="flex w-full">
					<input
						class="bg-black text-white placeholder-white border-white border-b mb-5 mr-5 w-1/2 focus:outline-none h-12"
						type="text" name="name" placeholder="Name">
					<input
						class="bg-black text-white placeholder-white border-white border-b mb-5 ml-5 w-1/2 focus:outline-none h-12"
						type="text" name="project" placeholder="Project">
				</span>
				<textarea
					class="bg-black text-white placeholder-white border-white border-b my-5 resize-none w-full h-52 focus:outline-none"
					placeholder="How can we improve?" name="message"></textarea>
				<button
					class="z-0 relative bg-beige text-black py-3 px-1 w-full my-5 font-semibold h-12 hover:bg-black hover:text-beige hover:ring-beige"
					type="submit">Submit Message</button>
			</form>
			</section>
			<section>

		</section>
	</main>
</template>

<style lang="scss" scoped>
.split span {
	opacity: 0;
	visibility: hidden;
	margin-right: 0.2em;
	display: inline-block;
	transform: translateY(400%);
	line-height: 0.5;
}

button {
	outline-style: solid;
}

@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

fieldset,
label {
	margin: 0;
	padding: 0;
}

/****** Style Star Rating Widget *****/

fieldset[class^="rating-"] {
	margin-right: auto;
}

fieldset[class^="rating-"] > input {
	display: none;
}

fieldset[class^="rating-"] > label:before {
	margin: 5px;
	font-size: 1.25em;
	font-family: FontAwesome;
	display: inline-block;
	content: "\f005";
}

fieldset[class^="rating-"] > .half:before {
	content: "\f089";
	position: absolute;
}

fieldset[class^="rating-"] > label {
	color: #ddd;
	float: right;
}

/***** CSS Magic to Highlight Stars on Hover *****/


/* hover previous stars in list */

fieldset[class^="rating-"] > input:checked+label:hover,
/* hover current star when changing rating */
fieldset[class^="rating-"] > input:checked~label:hover,
fieldset[class^="rating-"] > label:hover~input:checked~label,
/* lighten current selection */
fieldset[class^="rating-"] > input:checked~label:hover~label {
	color: #FFED85;
}
</style>