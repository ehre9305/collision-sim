import{s as d,n as a}from"../chunks/scheduler.Ce_0Mfso.js";import{S as x,i as p,e as n,s as h,y,c as b,d as e,f as w,z as f,o as r,h as v,g as l}from"../chunks/index.CKV1AsfL.js";const j=!1,O=j,R=O,D=!0,_=Object.freeze(Object.defineProperty({__proto__:null,csr:R,prerender:D},Symbol.toStringTag,{value:"Module"}));function q(c){let m,o,i,u=`<h1>Physics explaination</h1> <math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mstyle displaystyle="true" scriptlevel="0"><mrow data-mjx-texclass="ORD"><mtable rowspacing=".5em" columnspacing="1em" displaystyle="true"><mtr><mtd><mtext class="svelte-rpuqb">basic variables: </mtext></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">position for ball </mtext><mi>i</mi><mtext class="svelte-rpuqb"> is a point </mtext><mo stretchy="false">(</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>x</mi></mrow></msub><mo>,</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>y</mi></mrow></msub><mo stretchy="false">)</mo></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">velocity for ball </mtext><mi>i</mi><mtext class="svelte-rpuqb"> is a vector </mtext><mo stretchy="false">(</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>x</mi></mrow></msub><mo>,</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>y</mi></mrow></msub><mo stretchy="false">)</mo></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">radius for ball </mtext><mi>i</mi><mtext class="svelte-rpuqb"> is </mtext><msub><mi>r</mi><mi>i</mi></msub></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">position equaltions: </mtext></mtd></mtr><mtr><mtd><msub><mi>x</mi><mi>i</mi></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>x</mi></mrow></msub><mi>t</mi></mtd></mtr><mtr><mtd><msub><mi>y</mi><mi>i</mi></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>y</mi></mrow></msub><mo>+</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>y</mi></mrow></msub><mi>t</mi></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">distance between the centers of balls 1 and 2 (pythagorean theorem): </mtext></mtd></mtr><mtr><mtd><msqrt><mo stretchy="false">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>−</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><msup><mo stretchy="false">)</mo><mn>2</mn></msup></msqrt></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">distance between balls when there is a collision:</mtext></mtd></mtr><mtr><mtd><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><msub><mi>r</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">the times when those are equal is when the balls are perfectly touching</mtext></mtd></mtr><mtr><mtd><msqrt><mo stretchy="false">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>−</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><msup><mo stretchy="false">)</mo><mn>2</mn></msup></msqrt><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><msub><mi>r</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd><mstyle scriptlevel="0"><mspace width="0.278em"></mspace></mstyle><mo stretchy="false">⟹</mo><mstyle scriptlevel="0"><mspace width="0.278em"></mspace></mstyle><mo stretchy="false">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>−</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>=</mo><mo stretchy="false">(</mo><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><msub><mi>r</mi><mn>2</mn></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mtd></mtr><mtr><mtd><mstyle scriptlevel="0"><mspace width="0.278em"></mspace></mstyle><mo stretchy="false">⟹</mo><mstyle scriptlevel="0"><mspace width="0.278em"></mspace></mstyle><mo stretchy="false">(</mo><mo stretchy="false">(</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mn>1</mn><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>1</mn><mi>x</mi></mrow></msub><mi>t</mi><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mn>2</mn><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>2</mn><mi>x</mi></mrow></msub><mi>t</mi><mo stretchy="false">)</mo><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><mo stretchy="false">(</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mn>1</mn><mi>y</mi></mrow></msub><mo>+</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>1</mn><mi>y</mi></mrow></msub><mi>t</mi><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mn>2</mn><mi>y</mi></mrow></msub><mo>+</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>2</mn><mi>y</mi></mrow></msub><mi>t</mi><mo stretchy="false">)</mo><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>=</mo><mo stretchy="false">(</mo><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><msub><mi>r</mi><mn>2</mn></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">let </mtext><msub><mi>v</mi><mi>x</mi></msub><mo>=</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>1</mn><mi>x</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>2</mn><mi>x</mi></mrow></msub><mo>,</mo><msub><mi>v</mi><mi>y</mi></msub><mo>=</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>1</mn><mi>y</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>2</mn><mi>y</mi></mrow></msub><mo>,</mo><msub><mi>p</mi><mi>x</mi></msub><mo>=</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mn>1</mn><mi>x</mi></mrow></msub><mo>−</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mn>2</mn><mi>x</mi></mrow></msub><mo>,</mo><msub><mi>p</mi><mi>y</mi></msub><mo>=</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mn>1</mn><mi>y</mi></mrow></msub><mo>−</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mn>2</mn><mi>y</mi></mrow></msub><mo>,</mo><mi>R</mi><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><msub><mi>r</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd><mstyle scriptlevel="0"><mspace width="0.278em"></mspace></mstyle><mo stretchy="false">⟹</mo><mstyle scriptlevel="0"><mspace width="0.278em"></mspace></mstyle><mo stretchy="false">(</mo><msub><mi>v</mi><mi>x</mi></msub><mi>t</mi><mo>+</mo><msub><mi>p</mi><mi>x</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mi>y</mi></msub><mi>t</mi><mo>+</mo><msub><mi>p</mi><mi>y</mi></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd><mstyle scriptlevel="0"><mspace width="0.278em"></mspace></mstyle><mo stretchy="false">⟹</mo><mstyle scriptlevel="0"><mspace width="0.278em"></mspace></mstyle><msubsup><mi>v</mi><mi>x</mi><mn>2</mn></msubsup><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msub><mi>p</mi><mi>x</mi></msub><msub><mi>v</mi><mi>x</mi></msub><mi>t</mi><mo>+</mo><msubsup><mi>p</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mi>y</mi><mn>2</mn></msubsup><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msub><mi>p</mi><mi>y</mi></msub><msub><mi>v</mi><mi>y</mi></msub><mi>t</mi><mo>+</mo><msubsup><mi>p</mi><mi>y</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd><mstyle scriptlevel="0"><mspace width="0.278em"></mspace></mstyle><mo stretchy="false">⟹</mo><mstyle scriptlevel="0"><mspace width="0.278em"></mspace></mstyle><mo stretchy="false">(</mo><msubsup><mi>v</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mi>y</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">(</mo><msub><mi>p</mi><mi>x</mi></msub><msub><mi>v</mi><mi>x</mi></msub><mo>+</mo><msub><mi>p</mi><mi>y</mi></msub><msub><mi>v</mi><mi>y</mi></msub><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mi>t</mi><mo>+</mo><mo stretchy="false">(</mo><msubsup><mi>p</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>p</mi><mi>y</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>R</mi><mn>2</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">This is a quadratic equation, so we can use the quadratic formaula to solve for the
								times where the balls are colliding:</mtext></mtd></mtr><mtr><mtd><mi>t</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mi>b</mi><mo>±</mo><msqrt><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">where:</mtext></mtd></mtr><mtr><mtd><mi>a</mi><mo>=</mo><msubsup><mi>v</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mi>y</mi><mn>2</mn></msubsup></mtd></mtr><mtr><mtd><mi>b</mi><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><msub><mi>p</mi><mi>x</mi></msub><msub><mi>v</mi><mi>x</mi></msub><mo>+</mo><msub><mi>p</mi><mi>y</mi></msub><msub><mi>v</mi><mi>y</mi></msub><mo stretchy="false">)</mo></mtd></mtr><mtr><mtd><mi>c</mi><mo>=</mo><msubsup><mi>p</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>p</mi><mi>y</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>R</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">There are then two times where they are colliding. We want the first one because
								the second time is after they have passed through each other. </mtext></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">Because </mtext><mi>a</mi><mtext class="svelte-rpuqb"> is always positive, </mtext></mtd></mtr><mtr><mtd><mfrac><mrow><mo>−</mo><mi>b</mi><mo>−</mo><msqrt><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo>&lt;</mo><mfrac><mrow><mo>−</mo><mi>b</mi><mo>+</mo><msqrt><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">so</mtext><mfrac><mrow><mo>−</mo><mi>b</mi><mo>−</mo><msqrt><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mtext class="svelte-rpuqb"> is the formula for the collision</mtext></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">This calculation is done between every two balls to find the soonest collision.
								Then the new positions are updated with:</mtext></mtd></mtr><mtr><mtd><msub><mi>x</mi><mi>i</mi></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>x</mi></mrow></msub><mi>t</mi></mtd></mtr><mtr><mtd><msub><mi>y</mi><mi>i</mi></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><msub><mi>p</mi><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>y</mi></mrow></msub><mo>+</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>y</mi></mrow></msub><mi>t</mi></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb"> Then, all that is left is to update the velocities of the colliding balls.</mtext></mtd></mtr><mtr><mtd></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">The collisions are modeled as elastic, which means both there is both conservation
								of enregy, which uses this equation:</mtext></mtd></mtr><mtr><mtd><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mi>a</mi></msub><msubsup><mi>v</mi><mi>a</mi><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mi>b</mi></msub><msubsup><mi>v</mi><mi>b</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mi>a</mi></msub><msubsup><mi>v</mi><mrow data-mjx-texclass="ORD"><mi>a</mi><mi>f</mi></mrow><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mi>b</mi></msub><msubsup><mi>v</mi><mrow data-mjx-texclass="ORD"><mi>b</mi><mi>f</mi></mrow><mn>2</mn></msubsup></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">and conservation of momentum, which uses this equation:</mtext></mtd></mtr><mtr><mtd><msub><mi>m</mi><mi>a</mi></msub><msub><mi>v</mi><mi>a</mi></msub><mo>+</mo><msub><mi>m</mi><mi>b</mi></msub><msub><mi>v</mi><mi>b</mi></msub><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mi>a</mi><mi>f</mi></mrow></msub><mo>+</mo><msub><mi>m</mi><mi>b</mi></msub><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mi>b</mi><mi>f</mi></mrow></msub></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">Solving the system of equations for </mtext><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mi>a</mi><mi>f</mi></mrow></msub><mtext class="svelte-rpuqb"> and </mtext><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mi>b</mi><mi>f</mi></mrow></msub><mtext class="svelte-rpuqb"> gives</mtext></mtd></mtr><mtr><mtd><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mi>a</mi><mi>f</mi></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>−</mo><msub><mi>m</mi><mi>b</mi></msub></mrow><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>+</mo><msub><mi>m</mi><mi>b</mi></msub></mrow></mfrac><msub><mi>v</mi><mi>a</mi></msub><mo>+</mo><mfrac><mrow><mn>2</mn><msub><mi>m</mi><mi>b</mi></msub></mrow><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>+</mo><msub><mi>m</mi><mi>b</mi></msub></mrow></mfrac><msub><mi>v</mi><mi>b</mi></msub></mtd></mtr><mtr><mtd><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mi>b</mi><mi>f</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>m</mi><mi>a</mi></msub></mrow><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>+</mo><msub><mi>m</mi><mi>b</mi></msub></mrow></mfrac><msub><mi>v</mi><mi>a</mi></msub><mo>+</mo><mfrac><mrow><msub><mi>m</mi><mi>b</mi></msub><mo>−</mo><msub><mi>m</mi><mi>a</mi></msub></mrow><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>+</mo><msub><mi>m</mi><mi>b</mi></msub></mrow></mfrac><msub><mi>v</mi><mi>b</mi></msub></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">In order to do this with the colliding circles, we have to do for the velocities in
								line with the collision as the velocities perpendicular to the collision are
								unaffected</mtext></mtd></mtr><mtr><mtd><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>1</mn><mi>i</mi><mi>n</mi><mi>l</mi><mi>i</mi><mi>n</mi><mi>e</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>1</mn><mi>x</mi></mrow></msub><mi>cos</mi><mo data-mjx-texclass="NONE">⁡</mo><mi>θ</mi><mo>+</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>1</mn><mi>y</mi></mrow></msub><mi>sin</mi><mo data-mjx-texclass="NONE">⁡</mo><mi>θ</mi></mtd></mtr><mtr><mtd><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>2</mn><mi>i</mi><mi>n</mi><mi>l</mi><mi>i</mi><mi>n</mi><mi>e</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>2</mn><mi>x</mi></mrow></msub><mi>cos</mi><mo data-mjx-texclass="NONE">⁡</mo><mi>θ</mi><mo>+</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>2</mn><mi>y</mi></mrow></msub><mi>sin</mi><mo data-mjx-texclass="NONE">⁡</mo><mi>θ</mi></mtd></mtr><mtr><mtd><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>1</mn><mi>p</mi><mi>e</mi><mi>r</mi><mi>p</mi><mi>e</mi><mi>n</mi><mi>d</mi><mi>i</mi><mi>c</mi><mi>u</mi><mi>l</mi><mi>a</mi><mi>r</mi></mrow></msub><mo>=</mo><mo>−</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>1</mn><mi>x</mi></mrow></msub><mi>sin</mi><mo data-mjx-texclass="NONE">⁡</mo><mi>θ</mi><mo>+</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>1</mn><mi>y</mi></mrow></msub><mi>cos</mi><mo data-mjx-texclass="NONE">⁡</mo><mi>θ</mi></mtd></mtr><mtr><mtd><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>2</mn><mi>p</mi><mi>e</mi><mi>r</mi><mi>p</mi><mi>e</mi><mi>n</mi><mi>d</mi><mi>i</mi><mi>c</mi><mi>u</mi><mi>l</mi><mi>a</mi><mi>r</mi></mrow></msub><mo>=</mo><mo>−</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>2</mn><mi>x</mi></mrow></msub><mi>sin</mi><mo data-mjx-texclass="NONE">⁡</mo><mi>θ</mi><mo>+</mo><msub><mi>v</mi><mrow data-mjx-texclass="ORD"><mn>2</mn><mi>y</mi></mrow></msub><mi>cos</mi><mo data-mjx-texclass="NONE">⁡</mo><mi>θ</mi></mtd></mtr><mtr><mtd><mtext class="svelte-rpuqb">The inline velocities are updated with the fomulas above and the perpendicular
								velocities remain the same. They are then rotated back to x and y by doing the same
								rotation formula in the other direction</mtext></mtd></mtr></mtable></mrow></mstyle></math>`;return{c(){m=n("meta"),o=h(),i=n("div"),i.innerHTML=u,this.h()},l(s){const t=y("svelte-1ds1qyu",document.head);m=b(t,"META",{name:!0,content:!0}),t.forEach(e),o=w(s),i=b(s,"DIV",{class:!0,"data-svelte-h":!0}),f(i)!=="svelte-1l5ndye"&&(i.innerHTML=u),this.h()},h(){document.title="About",r(m,"name","description"),r(m,"content","About this app"),r(i,"class","text-column")},m(s,t){v(document.head,m),l(s,o,t),l(s,i,t)},p:a,i:a,o:a,d(s){s&&(e(o),e(i)),e(m)}}}class T extends x{constructor(m){super(),p(this,m,null,q,d,{})}}export{T as component,_ as universal};