'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
	 {
    id: 1,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    text: "Working with Paisana(House) has been discovering a new way to build a brand. From Araex to Villaconchi and the Maridae universe, they managed to connect the essence of wine with an emotional and digitally impeccable narrative. More than an agency, a strategic partner that understands our pace and ambition.",
    name: "Michael Chen",
    position: "CEO, Wine Estates"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    text: "Their creative approach transformed our brand identity completely. The attention to detail and understanding of our vision was remarkable. Every interaction felt collaborative and innovative.",
    name: "Sarah Williams",
    position: "Founder, Luxury Brands Co"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    text: "Exceptional work that exceeded all our expectations. Their team brought fresh perspectives and delivered results that truly resonated with our audience. A partnership we treasure.",
    name: "James Rodriguez",
    position: "Marketing Director, Innovation Labs"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    text: "The strategic insight and creative execution were phenomenal. They didn't just deliver a project—they crafted an experience that elevated our entire brand presence.",
    name: "Emily Thompson",
    position: "COO, Creative Solutions"
  }
];

export default function TestimonialCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const hasData = testimonials.length > 0;
	const stackDepth = Math.min(4, testimonials.length);

	const paginate = (dir) => {
		if (!hasData) return;
		setDirection(dir);
		setCurrentIndex((prev) =>
			dir > 0
				? (prev + 1) % testimonials.length
				: prev === 0
				? testimonials.length - 1
				: prev - 1
		);
	};

	const visible = [];
	if (hasData) {
		for (let i = 0; i < stackDepth; i++) {
			const idx = (currentIndex + i) % testimonials.length;
			visible.push({ ...testimonials[idx], offset: i });
		}
	}

	const backCardStyle = (offset) => ({
		y: offset * 18,
		scale: 1 - offset * 0.035,
		opacity: 1 - offset * 0.09,
		rotate: -4 * offset,
		x: -5 * offset
	});

	const activeVariants = {
		enter: (d) => ({
			x: d > 0 ? 180 : -180,
			rotateY: d > 0 ? -16 : 16,
			rotateZ: d > 0 ? 2.5 : -2.5,
			scale: 0.93,
			opacity: 0
		}),
		center: {
			x: 0,
			rotateY: 0,
			rotateZ: 0,
			scale: 1,
			opacity: 1,
			transition: { type: 'spring', stiffness: 250, damping: 24 }
		},
		exit: (d) => ({
			x: d > 0 ? -160 : 160,
			rotateY: d > 0 ? 12 : -12,
			rotateZ: d > 0 ? -2 : 2,
			scale: 0.93,
			opacity: 0,
			transition: { type: 'spring', stiffness: 230, damping: 26 }
		})
	};

	return (
		<section className="bg[#F5F1EB] py-24">
			<div className="mx-auto w-full max-w-5xl px-6 md:px-10">
				<h2 className="text-center font-light tracking-tight text-gray-900 text-4xl md:text-6xl mb-14">
					What our clients say
				</h2>

				{!hasData && (
					<p className="text-center text-gray-600 py-20">No testimonials available.</p>
				)}

				{hasData && (
					<>
						<div className="relative flex justify-center">
							{/* Arrows (closer + subtle style) */}
							<button
								onClick={() => paginate(-1)}
								className="absolute -left-4 md:-left-20 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/90 backdrop-blur rounded-full shadow hover:shadow-md border border-gray-200 transition"
								aria-label="Previous testimonial"
							>
								<ChevronLeft className="w-5 h-5" />
							</button>
							<button
								onClick={() => paginate(1)}
								className="absolute -right-4 md:-right-20 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/90 backdrop-blur rounded-full shadow hover:shadow-md border border-gray-200 transition"
								aria-label="Next testimonial"
							>
								<ChevronRight className="w-5 h-5" />
							</button>

							<div
								className="relative w-full max-w-sm h-[460px]"
								style={{ perspective: '1100px' }}
							>
								{/* Back stack */}
								{visible.slice(1).map(card => (
									<motion.div
										key={`bg-${card.id}-${card.offset}`}
										className="absolute inset-x-3 top-6 pointer-events-none"
										animate={backCardStyle(card.offset)}
										initial={false}
										transition={{ type: 'spring', stiffness: 230, damping: 28 }}
										style={{ zIndex: 40 - card.offset }}
									>
										<div
											className="bg-[#f7f6f2] border border-gray-300 shadow-md"
											style={{ borderRadius: '12px', aspectRatio: '2.4 / 3.4' }}
										/>
									</motion.div>
								))}

								<AnimatePresence initial={false} custom={direction} mode="wait">
									<motion.div
										key={testimonials[currentIndex].id}
										custom={direction}
										variants={activeVariants}
										initial="enter"
										animate="center"
										exit="exit"
										className="absolute inset-x-3 top-6"
										style={{ zIndex: 60, transformStyle: 'preserve-3d' }}
									>
										<motion.div
											whileHover={{ y: -3 }}
											whileTap={{ scale: 0.985 }}
											className="bg-[#faf9f5] border-2 border-gray-900 shadow-xl p-8 flex flex-col justify-between"
											style={{
												aspectRatio: '2.4 / 3.4',
												borderRadius: '14px',
												willChange: 'transform'
											}}
										>
											<div className="text-center">
												<motion.img
													key={`img-${testimonials[currentIndex].id}`}
													src={testimonials[currentIndex].image}
													alt={testimonials[currentIndex].name}
													className="w-14 h-14 mx-auto mb-5 object-cover grayscale rounded"
													initial={{ opacity: 0, scale: 0.85 }}
													animate={{ opacity: 1, scale: 1 }}
													transition={{ delay: 0.12 }}
												/>
												<motion.p
													key={`text-${testimonials[currentIndex].id}`}
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ delay: 0.18 }}
													className="text-gray-800 text-sm leading-relaxed mb-6"
												>
													"{testimonials[currentIndex].text}"
												</motion.p>
											</div>
											<div className="border-t border-gray-300 pt-3">
												<h3 className="text-gray-900 font-medium text-sm">
													{testimonials[currentIndex].name}
												</h3>
												<p className="text-[10px] tracking-wide uppercase text-gray-600">
													{testimonials[currentIndex].position}
												</p>
											</div>
										</motion.div>
									</motion.div>
								</AnimatePresence>
							</div>
						</div>

						{/* Dots */}
						<div className="flex justify-center gap-2 mt-12">
							{testimonials.map((t, i) => (
								<button
									key={t.id}
									onClick={() => {
										if (i === currentIndex) return;
										setDirection(i > currentIndex ? 1 : -1);
										setCurrentIndex(i);
									}}
									className={`h-1.5 rounded-full transition-all ${
										i === currentIndex ? 'w-10 bg-gray-900' : 'w-6 bg-gray-400'
									}`}
									aria-label={`Go to testimonial ${i + 1}`}
								/>
							))}
						</div>
					</>
				)}
			</div>
		</section>
	);
}