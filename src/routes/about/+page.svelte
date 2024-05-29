<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Physics explaination</h1>
	<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
		<mstyle displaystyle="true" scriptlevel="0">
			<mrow data-mjx-texclass="ORD">
				<mtable rowspacing=".5em" columnspacing="1em" displaystyle="true">
					<mtr>
						<mtd>
							<mtext>basic variables:&#xA0;</mtext>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext>position for ball&#xA0;</mtext>
							<mi>i</mi>
							<mtext>&#xA0;is a point&#xA0;</mtext>
							<mo stretchy="false">(</mo>
							<msub>
								<mi>p</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>i</mi>
									<mi>x</mi>
								</mrow>
							</msub>
							<mo>,</mo>
							<msub>
								<mi>p</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>i</mi>
									<mi>y</mi>
								</mrow>
							</msub>
							<mo stretchy="false">)</mo>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext>velocity for ball&#xA0;</mtext>
							<mi>i</mi>
							<mtext>&#xA0;is a vector&#xA0;</mtext>
							<mo stretchy="false">(</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>i</mi>
									<mi>x</mi>
								</mrow>
							</msub>
							<mo>,</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>i</mi>
									<mi>y</mi>
								</mrow>
							</msub>
							<mo stretchy="false">)</mo>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext>radius for ball&#xA0;</mtext>
							<mi>i</mi>
							<mtext>&#xA0;is&#xA0;</mtext>
							<msub>
								<mi>r</mi>
								<mi>i</mi>
							</msub>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext>position equaltions:&#xA0;</mtext>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<msub>
								<mi>x</mi>
								<mi>i</mi>
							</msub>
							<mo stretchy="false">(</mo>
							<mi>t</mi>
							<mo stretchy="false">)</mo>
							<mo>=</mo>
							<msub>
								<mi>p</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>i</mi>
									<mi>x</mi>
								</mrow>
							</msub>
							<mo>+</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>i</mi>
									<mi>x</mi>
								</mrow>
							</msub>
							<mi>t</mi>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<msub>
								<mi>y</mi>
								<mi>i</mi>
							</msub>
							<mo stretchy="false">(</mo>
							<mi>t</mi>
							<mo stretchy="false">)</mo>
							<mo>=</mo>
							<msub>
								<mi>p</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>i</mi>
									<mi>y</mi>
								</mrow>
							</msub>
							<mo>+</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>i</mi>
									<mi>y</mi>
								</mrow>
							</msub>
							<mi>t</mi>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext
								>distance between the centers of balls 1 and 2 (pythagorean theorem):&#xA0;</mtext
							>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<msqrt>
								<mo stretchy="false">(</mo>
								<msub>
									<mi>x</mi>
									<mn>1</mn>
								</msub>
								<mo stretchy="false">(</mo>
								<mi>t</mi>
								<mo stretchy="false">)</mo>
								<mo>&#x2212;</mo>
								<msub>
									<mi>x</mi>
									<mn>2</mn>
								</msub>
								<mo stretchy="false">(</mo>
								<mi>t</mi>
								<mo stretchy="false">)</mo>
								<msup>
									<mo stretchy="false">)</mo>
									<mn>2</mn>
								</msup>
								<mo>+</mo>
								<mo stretchy="false">(</mo>
								<msub>
									<mi>y</mi>
									<mn>1</mn>
								</msub>
								<mo stretchy="false">(</mo>
								<mi>t</mi>
								<mo stretchy="false">)</mo>
								<mo>&#x2212;</mo>
								<msub>
									<mi>y</mi>
									<mn>2</mn>
								</msub>
								<mo stretchy="false">(</mo>
								<mi>t</mi>
								<mo stretchy="false">)</mo>
								<msup>
									<mo stretchy="false">)</mo>
									<mn>2</mn>
								</msup>
							</msqrt>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext>distance between balls when there is a collision:</mtext>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<msub>
								<mi>r</mi>
								<mn>1</mn>
							</msub>
							<mo>+</mo>
							<msub>
								<mi>r</mi>
								<mn>2</mn>
							</msub>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext>the times when those are equal is when the balls are perfectly touching</mtext>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<msqrt>
								<mo stretchy="false">(</mo>
								<msub>
									<mi>x</mi>
									<mn>1</mn>
								</msub>
								<mo stretchy="false">(</mo>
								<mi>t</mi>
								<mo stretchy="false">)</mo>
								<mo>&#x2212;</mo>
								<msub>
									<mi>x</mi>
									<mn>2</mn>
								</msub>
								<mo stretchy="false">(</mo>
								<mi>t</mi>
								<mo stretchy="false">)</mo>
								<msup>
									<mo stretchy="false">)</mo>
									<mn>2</mn>
								</msup>
								<mo>+</mo>
								<mo stretchy="false">(</mo>
								<msub>
									<mi>y</mi>
									<mn>1</mn>
								</msub>
								<mo stretchy="false">(</mo>
								<mi>t</mi>
								<mo stretchy="false">)</mo>
								<mo>&#x2212;</mo>
								<msub>
									<mi>y</mi>
									<mn>2</mn>
								</msub>
								<mo stretchy="false">(</mo>
								<mi>t</mi>
								<mo stretchy="false">)</mo>
								<msup>
									<mo stretchy="false">)</mo>
									<mn>2</mn>
								</msup>
							</msqrt>
							<mo>=</mo>
							<msub>
								<mi>r</mi>
								<mn>1</mn>
							</msub>
							<mo>+</mo>
							<msub>
								<mi>r</mi>
								<mn>2</mn>
							</msub>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mstyle scriptlevel="0">
								<mspace width="0.278em"></mspace>
							</mstyle>
							<mo stretchy="false">&#x27F9;</mo>
							<mstyle scriptlevel="0">
								<mspace width="0.278em"></mspace>
							</mstyle>
							<mo stretchy="false">(</mo>
							<msub>
								<mi>x</mi>
								<mn>1</mn>
							</msub>
							<mo stretchy="false">(</mo>
							<mi>t</mi>
							<mo stretchy="false">)</mo>
							<mo>&#x2212;</mo>
							<msub>
								<mi>x</mi>
								<mn>2</mn>
							</msub>
							<mo stretchy="false">(</mo>
							<mi>t</mi>
							<mo stretchy="false">)</mo>
							<msup>
								<mo stretchy="false">)</mo>
								<mn>2</mn>
							</msup>
							<mo>+</mo>
							<mo stretchy="false">(</mo>
							<msub>
								<mi>y</mi>
								<mn>1</mn>
							</msub>
							<mo stretchy="false">(</mo>
							<mi>t</mi>
							<mo stretchy="false">)</mo>
							<mo>&#x2212;</mo>
							<msub>
								<mi>y</mi>
								<mn>2</mn>
							</msub>
							<mo stretchy="false">(</mo>
							<mi>t</mi>
							<mo stretchy="false">)</mo>
							<msup>
								<mo stretchy="false">)</mo>
								<mn>2</mn>
							</msup>
							<mo>=</mo>
							<mo stretchy="false">(</mo>
							<msub>
								<mi>r</mi>
								<mn>1</mn>
							</msub>
							<mo>+</mo>
							<msub>
								<mi>r</mi>
								<mn>2</mn>
							</msub>
							<msup>
								<mo stretchy="false">)</mo>
								<mn>2</mn>
							</msup>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mstyle scriptlevel="0">
								<mspace width="0.278em"></mspace>
							</mstyle>
							<mo stretchy="false">&#x27F9;</mo>
							<mstyle scriptlevel="0">
								<mspace width="0.278em"></mspace>
							</mstyle>
							<mo stretchy="false">(</mo>
							<mo stretchy="false">(</mo>
							<msub>
								<mi>p</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>1</mn>
									<mi>x</mi>
								</mrow>
							</msub>
							<mo>+</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>1</mn>
									<mi>x</mi>
								</mrow>
							</msub>
							<mi>t</mi>
							<mo stretchy="false">)</mo>
							<mo>&#x2212;</mo>
							<mo stretchy="false">(</mo>
							<msub>
								<mi>p</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>2</mn>
									<mi>x</mi>
								</mrow>
							</msub>
							<mo>+</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>2</mn>
									<mi>x</mi>
								</mrow>
							</msub>
							<mi>t</mi>
							<mo stretchy="false">)</mo>
							<msup>
								<mo stretchy="false">)</mo>
								<mn>2</mn>
							</msup>
							<mo>+</mo>
							<mo stretchy="false">(</mo>
							<mo stretchy="false">(</mo>
							<msub>
								<mi>p</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>1</mn>
									<mi>y</mi>
								</mrow>
							</msub>
							<mo>+</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>1</mn>
									<mi>y</mi>
								</mrow>
							</msub>
							<mi>t</mi>
							<mo stretchy="false">)</mo>
							<mo>&#x2212;</mo>
							<mo stretchy="false">(</mo>
							<msub>
								<mi>p</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>2</mn>
									<mi>y</mi>
								</mrow>
							</msub>
							<mo>+</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>2</mn>
									<mi>y</mi>
								</mrow>
							</msub>
							<mi>t</mi>
							<mo stretchy="false">)</mo>
							<msup>
								<mo stretchy="false">)</mo>
								<mn>2</mn>
							</msup>
							<mo>=</mo>
							<mo stretchy="false">(</mo>
							<msub>
								<mi>r</mi>
								<mn>1</mn>
							</msub>
							<mo>+</mo>
							<msub>
								<mi>r</mi>
								<mn>2</mn>
							</msub>
							<msup>
								<mo stretchy="false">)</mo>
								<mn>2</mn>
							</msup>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext>let&#xA0;</mtext>
							<msub>
								<mi>v</mi>
								<mi>x</mi>
							</msub>
							<mo>=</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>1</mn>
									<mi>x</mi>
								</mrow>
							</msub>
							<mo>&#x2212;</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>2</mn>
									<mi>x</mi>
								</mrow>
							</msub>
							<mo>,</mo>
							<msub>
								<mi>v</mi>
								<mi>y</mi>
							</msub>
							<mo>=</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>1</mn>
									<mi>y</mi>
								</mrow>
							</msub>
							<mo>&#x2212;</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>2</mn>
									<mi>y</mi>
								</mrow>
							</msub>
							<mo>,</mo>
							<msub>
								<mi>p</mi>
								<mi>x</mi>
							</msub>
							<mo>=</mo>
							<msub>
								<mi>p</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>1</mn>
									<mi>x</mi>
								</mrow>
							</msub>
							<mo>&#x2212;</mo>
							<msub>
								<mi>p</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>2</mn>
									<mi>x</mi>
								</mrow>
							</msub>
							<mo>,</mo>
							<msub>
								<mi>p</mi>
								<mi>y</mi>
							</msub>
							<mo>=</mo>
							<msub>
								<mi>p</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>1</mn>
									<mi>y</mi>
								</mrow>
							</msub>
							<mo>&#x2212;</mo>
							<msub>
								<mi>p</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>2</mn>
									<mi>y</mi>
								</mrow>
							</msub>
							<mo>,</mo>
							<mi>R</mi>
							<mo>=</mo>
							<msub>
								<mi>r</mi>
								<mn>1</mn>
							</msub>
							<mo>+</mo>
							<msub>
								<mi>r</mi>
								<mn>2</mn>
							</msub>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mstyle scriptlevel="0">
								<mspace width="0.278em"></mspace>
							</mstyle>
							<mo stretchy="false">&#x27F9;</mo>
							<mstyle scriptlevel="0">
								<mspace width="0.278em"></mspace>
							</mstyle>
							<mo stretchy="false">(</mo>
							<msub>
								<mi>v</mi>
								<mi>x</mi>
							</msub>
							<mi>t</mi>
							<mo>+</mo>
							<msub>
								<mi>p</mi>
								<mi>x</mi>
							</msub>
							<msup>
								<mo stretchy="false">)</mo>
								<mn>2</mn>
							</msup>
							<mo>+</mo>
							<mo stretchy="false">(</mo>
							<msub>
								<mi>v</mi>
								<mi>y</mi>
							</msub>
							<mi>t</mi>
							<mo>+</mo>
							<msub>
								<mi>p</mi>
								<mi>y</mi>
							</msub>
							<msup>
								<mo stretchy="false">)</mo>
								<mn>2</mn>
							</msup>
							<mo>=</mo>
							<msup>
								<mi>R</mi>
								<mn>2</mn>
							</msup>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mstyle scriptlevel="0">
								<mspace width="0.278em"></mspace>
							</mstyle>
							<mo stretchy="false">&#x27F9;</mo>
							<mstyle scriptlevel="0">
								<mspace width="0.278em"></mspace>
							</mstyle>
							<msubsup>
								<mi>v</mi>
								<mi>x</mi>
								<mn>2</mn>
							</msubsup>
							<msup>
								<mi>t</mi>
								<mn>2</mn>
							</msup>
							<mo>+</mo>
							<mn>2</mn>
							<msub>
								<mi>p</mi>
								<mi>x</mi>
							</msub>
							<msub>
								<mi>v</mi>
								<mi>x</mi>
							</msub>
							<mi>t</mi>
							<mo>+</mo>
							<msubsup>
								<mi>p</mi>
								<mi>x</mi>
								<mn>2</mn>
							</msubsup>
							<mo>+</mo>
							<msubsup>
								<mi>v</mi>
								<mi>y</mi>
								<mn>2</mn>
							</msubsup>
							<msup>
								<mi>t</mi>
								<mn>2</mn>
							</msup>
							<mo>+</mo>
							<mn>2</mn>
							<msub>
								<mi>p</mi>
								<mi>y</mi>
							</msub>
							<msub>
								<mi>v</mi>
								<mi>y</mi>
							</msub>
							<mi>t</mi>
							<mo>+</mo>
							<msubsup>
								<mi>p</mi>
								<mi>y</mi>
								<mn>2</mn>
							</msubsup>
							<mo>&#x2212;</mo>
							<msup>
								<mi>R</mi>
								<mn>2</mn>
							</msup>
							<mo>=</mo>
							<mn>0</mn>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mstyle scriptlevel="0">
								<mspace width="0.278em"></mspace>
							</mstyle>
							<mo stretchy="false">&#x27F9;</mo>
							<mstyle scriptlevel="0">
								<mspace width="0.278em"></mspace>
							</mstyle>
							<mo stretchy="false">(</mo>
							<msubsup>
								<mi>v</mi>
								<mi>x</mi>
								<mn>2</mn>
							</msubsup>
							<mo>+</mo>
							<msubsup>
								<mi>v</mi>
								<mi>y</mi>
								<mn>2</mn>
							</msubsup>
							<mo stretchy="false">)</mo>
							<msup>
								<mi>t</mi>
								<mn>2</mn>
							</msup>
							<mo>+</mo>
							<mo stretchy="false">(</mo>
							<mn>2</mn>
							<mo stretchy="false">(</mo>
							<msub>
								<mi>p</mi>
								<mi>x</mi>
							</msub>
							<msub>
								<mi>v</mi>
								<mi>x</mi>
							</msub>
							<mo>+</mo>
							<msub>
								<mi>p</mi>
								<mi>y</mi>
							</msub>
							<msub>
								<mi>v</mi>
								<mi>y</mi>
							</msub>
							<mo stretchy="false">)</mo>
							<mo stretchy="false">)</mo>
							<mi>t</mi>
							<mo>+</mo>
							<mo stretchy="false">(</mo>
							<msubsup>
								<mi>p</mi>
								<mi>x</mi>
								<mn>2</mn>
							</msubsup>
							<mo>+</mo>
							<msubsup>
								<mi>p</mi>
								<mi>y</mi>
								<mn>2</mn>
							</msubsup>
							<mo>&#x2212;</mo>
							<msup>
								<mi>R</mi>
								<mn>2</mn>
							</msup>
							<mo stretchy="false">)</mo>
							<mo>=</mo>
							<mn>0</mn>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext
								>This is a quadratic equation, so we can use the quadratic formaula to solve for the
								times where the balls are colliding:</mtext
							>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mi>t</mi>
							<mo>=</mo>
							<mfrac>
								<mrow>
									<mo>&#x2212;</mo>
									<mi>b</mi>
									<mo>&#xB1;</mo>
									<msqrt>
										<msup>
											<mi>b</mi>
											<mn>2</mn>
										</msup>
										<mo>&#x2212;</mo>
										<mn>4</mn>
										<mi>a</mi>
										<mi>c</mi>
									</msqrt>
								</mrow>
								<mrow>
									<mn>2</mn>
									<mi>a</mi>
								</mrow>
							</mfrac>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext>where:</mtext>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mi>a</mi>
							<mo>=</mo>
							<msubsup>
								<mi>v</mi>
								<mi>x</mi>
								<mn>2</mn>
							</msubsup>
							<mo>+</mo>
							<msubsup>
								<mi>v</mi>
								<mi>y</mi>
								<mn>2</mn>
							</msubsup>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mi>b</mi>
							<mo>=</mo>
							<mn>2</mn>
							<mo stretchy="false">(</mo>
							<msub>
								<mi>p</mi>
								<mi>x</mi>
							</msub>
							<msub>
								<mi>v</mi>
								<mi>x</mi>
							</msub>
							<mo>+</mo>
							<msub>
								<mi>p</mi>
								<mi>y</mi>
							</msub>
							<msub>
								<mi>v</mi>
								<mi>y</mi>
							</msub>
							<mo stretchy="false">)</mo>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mi>c</mi>
							<mo>=</mo>
							<msubsup>
								<mi>p</mi>
								<mi>x</mi>
								<mn>2</mn>
							</msubsup>
							<mo>+</mo>
							<msubsup>
								<mi>p</mi>
								<mi>y</mi>
								<mn>2</mn>
							</msubsup>
							<mo>&#x2212;</mo>
							<msup>
								<mi>R</mi>
								<mn>2</mn>
							</msup>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext
								>There are then two times where they are colliding. We want the first one because
								the second time is after they have passed through each other.&#xA0;</mtext
							>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext>Because&#xA0;</mtext>
							<mi>a</mi>
							<mtext>&#xA0;is always positive,&#xA0;</mtext>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mfrac>
								<mrow>
									<mo>&#x2212;</mo>
									<mi>b</mi>
									<mo>&#x2212;</mo>
									<msqrt>
										<msup>
											<mi>b</mi>
											<mn>2</mn>
										</msup>
										<mo>&#x2212;</mo>
										<mn>4</mn>
										<mi>a</mi>
										<mi>c</mi>
									</msqrt>
								</mrow>
								<mrow>
									<mn>2</mn>
									<mi>a</mi>
								</mrow>
							</mfrac>
							<mo>&lt;</mo>
							<mfrac>
								<mrow>
									<mo>&#x2212;</mo>
									<mi>b</mi>
									<mo>+</mo>
									<msqrt>
										<msup>
											<mi>b</mi>
											<mn>2</mn>
										</msup>
										<mo>&#x2212;</mo>
										<mn>4</mn>
										<mi>a</mi>
										<mi>c</mi>
									</msqrt>
								</mrow>
								<mrow>
									<mn>2</mn>
									<mi>a</mi>
								</mrow>
							</mfrac>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext>so</mtext>
							<mfrac>
								<mrow>
									<mo>&#x2212;</mo>
									<mi>b</mi>
									<mo>&#x2212;</mo>
									<msqrt>
										<msup>
											<mi>b</mi>
											<mn>2</mn>
										</msup>
										<mo>&#x2212;</mo>
										<mn>4</mn>
										<mi>a</mi>
										<mi>c</mi>
									</msqrt>
								</mrow>
								<mrow>
									<mn>2</mn>
									<mi>a</mi>
								</mrow>
							</mfrac>
							<mtext>&#xA0;is the formula for the collision</mtext>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext
								>This calculation is done between every two balls to find the soonest collision.
								Then the new positions are updated with:</mtext
							>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<msub>
								<mi>x</mi>
								<mi>i</mi>
							</msub>
							<mo stretchy="false">(</mo>
							<mi>t</mi>
							<mo stretchy="false">)</mo>
							<mo>=</mo>
							<msub>
								<mi>p</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>i</mi>
									<mi>x</mi>
								</mrow>
							</msub>
							<mo>+</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>i</mi>
									<mi>x</mi>
								</mrow>
							</msub>
							<mi>t</mi>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<msub>
								<mi>y</mi>
								<mi>i</mi>
							</msub>
							<mo stretchy="false">(</mo>
							<mi>t</mi>
							<mo stretchy="false">)</mo>
							<mo>=</mo>
							<msub>
								<mi>p</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>i</mi>
									<mi>y</mi>
								</mrow>
							</msub>
							<mo>+</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>i</mi>
									<mi>y</mi>
								</mrow>
							</msub>
							<mi>t</mi>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext
								>&#xA0;Then, all that is left is to update the velocities of the colliding balls.</mtext
							>
						</mtd>
					</mtr>
					<mtr>
						<mtd></mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext
								>The collisions are modeled as elastic, which means both there is both conservation
								of enregy, which uses this equation:</mtext
							>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mfrac>
								<mn>1</mn>
								<mn>2</mn>
							</mfrac>
							<msub>
								<mi>m</mi>
								<mi>a</mi>
							</msub>
							<msubsup>
								<mi>v</mi>
								<mi>a</mi>
								<mn>2</mn>
							</msubsup>
							<mo>+</mo>
							<mfrac>
								<mn>1</mn>
								<mn>2</mn>
							</mfrac>
							<msub>
								<mi>m</mi>
								<mi>b</mi>
							</msub>
							<msubsup>
								<mi>v</mi>
								<mi>b</mi>
								<mn>2</mn>
							</msubsup>
							<mo>=</mo>
							<mfrac>
								<mn>1</mn>
								<mn>2</mn>
							</mfrac>
							<msub>
								<mi>m</mi>
								<mi>a</mi>
							</msub>
							<msubsup>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>a</mi>
									<mi>f</mi>
								</mrow>
								<mn>2</mn>
							</msubsup>
							<mo>+</mo>
							<mfrac>
								<mn>1</mn>
								<mn>2</mn>
							</mfrac>
							<msub>
								<mi>m</mi>
								<mi>b</mi>
							</msub>
							<msubsup>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>b</mi>
									<mi>f</mi>
								</mrow>
								<mn>2</mn>
							</msubsup>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext>and conservation of momentum, which uses this equation:</mtext>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<msub>
								<mi>m</mi>
								<mi>a</mi>
							</msub>
							<msub>
								<mi>v</mi>
								<mi>a</mi>
							</msub>
							<mo>+</mo>
							<msub>
								<mi>m</mi>
								<mi>b</mi>
							</msub>
							<msub>
								<mi>v</mi>
								<mi>b</mi>
							</msub>
							<mo>=</mo>
							<msub>
								<mi>m</mi>
								<mi>a</mi>
							</msub>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>a</mi>
									<mi>f</mi>
								</mrow>
							</msub>
							<mo>+</mo>
							<msub>
								<mi>m</mi>
								<mi>b</mi>
							</msub>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>b</mi>
									<mi>f</mi>
								</mrow>
							</msub>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext>Solving the system of equations for&#xA0;</mtext>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>a</mi>
									<mi>f</mi>
								</mrow>
							</msub>
							<mtext>&#xA0;and&#xA0;</mtext>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>b</mi>
									<mi>f</mi>
								</mrow>
							</msub>
							<mtext>&#xA0;gives</mtext>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>a</mi>
									<mi>f</mi>
								</mrow>
							</msub>
							<mo>=</mo>
							<mfrac>
								<mrow>
									<msub>
										<mi>m</mi>
										<mi>a</mi>
									</msub>
									<mo>&#x2212;</mo>
									<msub>
										<mi>m</mi>
										<mi>b</mi>
									</msub>
								</mrow>
								<mrow>
									<msub>
										<mi>m</mi>
										<mi>a</mi>
									</msub>
									<mo>+</mo>
									<msub>
										<mi>m</mi>
										<mi>b</mi>
									</msub>
								</mrow>
							</mfrac>
							<msub>
								<mi>v</mi>
								<mi>a</mi>
							</msub>
							<mo>+</mo>
							<mfrac>
								<mrow>
									<mn>2</mn>
									<msub>
										<mi>m</mi>
										<mi>b</mi>
									</msub>
								</mrow>
								<mrow>
									<msub>
										<mi>m</mi>
										<mi>a</mi>
									</msub>
									<mo>+</mo>
									<msub>
										<mi>m</mi>
										<mi>b</mi>
									</msub>
								</mrow>
							</mfrac>
							<msub>
								<mi>v</mi>
								<mi>b</mi>
							</msub>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mi>b</mi>
									<mi>f</mi>
								</mrow>
							</msub>
							<mo>=</mo>
							<mfrac>
								<mrow>
									<mn>2</mn>
									<msub>
										<mi>m</mi>
										<mi>a</mi>
									</msub>
								</mrow>
								<mrow>
									<msub>
										<mi>m</mi>
										<mi>a</mi>
									</msub>
									<mo>+</mo>
									<msub>
										<mi>m</mi>
										<mi>b</mi>
									</msub>
								</mrow>
							</mfrac>
							<msub>
								<mi>v</mi>
								<mi>a</mi>
							</msub>
							<mo>+</mo>
							<mfrac>
								<mrow>
									<msub>
										<mi>m</mi>
										<mi>b</mi>
									</msub>
									<mo>&#x2212;</mo>
									<msub>
										<mi>m</mi>
										<mi>a</mi>
									</msub>
								</mrow>
								<mrow>
									<msub>
										<mi>m</mi>
										<mi>a</mi>
									</msub>
									<mo>+</mo>
									<msub>
										<mi>m</mi>
										<mi>b</mi>
									</msub>
								</mrow>
							</mfrac>
							<msub>
								<mi>v</mi>
								<mi>b</mi>
							</msub>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext
								>In order to do this with the colliding circles, we have to do for the velocities in
								line with the collision as the velocities perpendicular to the collision are
								unaffected</mtext
							>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>1</mn>
									<mi>i</mi>
									<mi>n</mi>
									<mi>l</mi>
									<mi>i</mi>
									<mi>n</mi>
									<mi>e</mi>
								</mrow>
							</msub>
							<mo>=</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>1</mn>
									<mi>x</mi>
								</mrow>
							</msub>
							<mi>cos</mi>
							<mo data-mjx-texclass="NONE">&#x2061;</mo>
							<mi>&#x3B8;</mi>
							<mo>+</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>1</mn>
									<mi>y</mi>
								</mrow>
							</msub>
							<mi>sin</mi>
							<mo data-mjx-texclass="NONE">&#x2061;</mo>
							<mi>&#x3B8;</mi>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>2</mn>
									<mi>i</mi>
									<mi>n</mi>
									<mi>l</mi>
									<mi>i</mi>
									<mi>n</mi>
									<mi>e</mi>
								</mrow>
							</msub>
							<mo>=</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>2</mn>
									<mi>x</mi>
								</mrow>
							</msub>
							<mi>cos</mi>
							<mo data-mjx-texclass="NONE">&#x2061;</mo>
							<mi>&#x3B8;</mi>
							<mo>+</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>2</mn>
									<mi>y</mi>
								</mrow>
							</msub>
							<mi>sin</mi>
							<mo data-mjx-texclass="NONE">&#x2061;</mo>
							<mi>&#x3B8;</mi>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>1</mn>
									<mi>p</mi>
									<mi>e</mi>
									<mi>r</mi>
									<mi>p</mi>
									<mi>e</mi>
									<mi>n</mi>
									<mi>d</mi>
									<mi>i</mi>
									<mi>c</mi>
									<mi>u</mi>
									<mi>l</mi>
									<mi>a</mi>
									<mi>r</mi>
								</mrow>
							</msub>
							<mo>=</mo>
							<mo>&#x2212;</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>1</mn>
									<mi>x</mi>
								</mrow>
							</msub>
							<mi>sin</mi>
							<mo data-mjx-texclass="NONE">&#x2061;</mo>
							<mi>&#x3B8;</mi>
							<mo>+</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>1</mn>
									<mi>y</mi>
								</mrow>
							</msub>
							<mi>cos</mi>
							<mo data-mjx-texclass="NONE">&#x2061;</mo>
							<mi>&#x3B8;</mi>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>2</mn>
									<mi>p</mi>
									<mi>e</mi>
									<mi>r</mi>
									<mi>p</mi>
									<mi>e</mi>
									<mi>n</mi>
									<mi>d</mi>
									<mi>i</mi>
									<mi>c</mi>
									<mi>u</mi>
									<mi>l</mi>
									<mi>a</mi>
									<mi>r</mi>
								</mrow>
							</msub>
							<mo>=</mo>
							<mo>&#x2212;</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>2</mn>
									<mi>x</mi>
								</mrow>
							</msub>
							<mi>sin</mi>
							<mo data-mjx-texclass="NONE">&#x2061;</mo>
							<mi>&#x3B8;</mi>
							<mo>+</mo>
							<msub>
								<mi>v</mi>
								<mrow data-mjx-texclass="ORD">
									<mn>2</mn>
									<mi>y</mi>
								</mrow>
							</msub>
							<mi>cos</mi>
							<mo data-mjx-texclass="NONE">&#x2061;</mo>
							<mi>&#x3B8;</mi>
						</mtd>
					</mtr>
					<mtr>
						<mtd>
							<mtext
								>The inline velocities are updated with the fomulas above and the perpendicular
								velocities remain the same. They are then rotated back to x and y by doing the same
								rotation formula in the other direction</mtext
							>
						</mtd>
					</mtr>
				</mtable>
			</mrow>
		</mstyle>
	</math>
</div>

<style>
	mtext {
		display: inline-block; /* Ensure mtext respects block-level behavior */
		max-width: 100%; /* Ensure mtext doesn't overflow its container */
	}
</style>
