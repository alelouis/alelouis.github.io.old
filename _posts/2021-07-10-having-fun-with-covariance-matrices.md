---
title: Having fun with covariance matrices
date: 2021-07-10 16:00:00 -00:00
layout: post
---
# Having fun with covariance matrices

## **Short introduction to transformation matrices**

**Matrices are a simple yet a vast topic.** Actually, one can project all sorts of things onto this conceptual object, geometrical transformation being one of them.

*I love thinking about matrices and their properties as geometrical phenomena, with shapes and movements. I will try to share my excitement about it in this blog post.*


Let's consider a matrix with a strong identity (*laughs*).

$$ I = \begin{bmatrix}
1 & 0\\
0 & 1
\end{bmatrix}
 $$

We may know (or not) that multiplying any vector or matrix with the identity matrix $$I$$ doesn't bring much excitement to life. It is approximately as exciting as multiplying a number by 1.

$$ 1 = 1 \times 1
 $$

**Fun right ?**

 If nothing happens, even if you don't know anything about transformation matrices, you should feel that this *transformation* is not transforming anything. 
 
 *But what are we trying to transform anyway ?*

Introducing, vectors ! An easy way to represent vectors in a plane is by using two others orthogonal vectors with unit norm. 

$$ \hat{\imath} = \begin{bmatrix}
1\\
0
\end{bmatrix},\space
\hat{\jmath} = \begin{bmatrix}
0\\
1
\end{bmatrix}
 $$

Any vector can then be described by a linear combination of those two vectors (*like coordinates*).

$$ \vec{v} = \begin{bmatrix}
2\\
5
\end{bmatrix}  =
2\hat{\imath} + 5 \hat{\jmath}
 $$

In order to know what $$I$$ is doing to $$\vec{v}$$, we can ask what $$I$$ is doing to $$\hat{\imath}$$ and $$\hat{\jmath}$$ instead. 
Let's find out (*let's do the maths, as the kids say*). I will note $$f_I$$ the function associated to the transformation matrix $$I$$.

 $$
 f_I(\hat{\imath})
 =I\hat{\imath}
 =\begin{bmatrix}
1 & 0\\
0 & 1
\end{bmatrix}\begin{bmatrix}
1\\
0
\end{bmatrix}
=
\begin{bmatrix}
1\\
0
\end{bmatrix}
=\hat{\imath}
 $$


 If we were not fully convinced, we showed that $$I$$ is doesn't change $$\hat{\imath}$$ (*what a result*). $$f_I(\hat{\imath})=\hat{\imath}$$
If this is looking boring and easy, keep on with me. Let's take another matrix.

$$ A = \begin{bmatrix}
2 & 4\\
1 & 5
\end{bmatrix}
 $$


 If this *just* look like a random
 matrix to you right now, you'll see something else really soon.
If I were to ask the same question as before, what would be $$f_A(\hat{\imath})$$ and $$f_A(\hat{\jmath})$$?
 No need to do boring math again, the result are already written as columns:

$$
 f_A(\hat{\imath})
 =\begin{bmatrix}
2\\
1
\end{bmatrix},\space
 f_A(\hat{\jmath})
 =\begin{bmatrix}
4\\
5
\end{bmatrix}
 $$

 Things start to move here, $$\hat{\imath}$$ and $$\hat{\jmath}$$ did change. 

 **Also, reading the columns of $$A$$ told us where $$\hat{\imath}$$ and $$\hat{\jmath}$$ went**. 

 If you can picture in your head $$\hat{\imath} (1, 0)$$ gradually moving to $$f_A(\hat{\imath})(2,1)$$, you feel how $$A$$ is transforming the $$x$$ axis. The same goes for $$\hat{\jmath}$$ and the $$y$$ axis. And if you know what happens to $$\hat{\imath}$$ and $$\hat{\jmath}$$, **well you know what happens to every vector.**

 Having this new mental model in your *big* head, exercise time. How could we build a rotation matrix of angle $$\pi / 2$$ ? Forgetting about sines and cosines, we only need to focus on what happens to $$\hat{\imath}$$ and $$\hat{\jmath}$$. 
 
- Rotating $$\hat{\imath}(1, 0)$$ by $$\pi / 2$$ in a counterclockwise fashion gives $$(0, 1)$$, **this is our first column**. 

- Rotating $$\hat{\jmath}(0, 1)$$ by $$\pi / 2$$ in a counterclockwise fashion gives $$(-1, 0)$$, **this is our second column**.

Hence, our  $$\pi / 2$$ rotation matrix must be:

$$ R = \begin{bmatrix}
0 & -1\\
1 & 0
\end{bmatrix}
 $$
 Plugging $$\theta=\pi / 2$$ in the well known 2D rotation matrix expression yields the same thing:
 
$$ R = \begin{bmatrix}
\cos \theta & -\sin \theta \\  
\sin \theta & \cos \theta \\
\end{bmatrix}
 $$

Except that in the first approach, we deduced $$R$$ from understanding what $$R$$ should do to $$\hat{\imath}$$ and $$\hat{\jmath}$$ and did not rely on our memory. For a more generalized principle, we can easily remember this 2D rotation matrix expression by understanding the two columns as the results of a rotation of angle $$\theta$$ of  $$\hat{\imath}$$ and $$\hat{\jmath}$$.

Because the main subject of this blog post is not to do a full depth intro to geometric intution of matrices, I will drop a **few fun facts** that could tackle your curiosity when thinking about matrices this way:

- **the determinant $$\det(M)$$ of a matrix is the change factor of the area spanned by $$f(\hat{\imath})$$ and $$f(\hat{\jmath})$$**
    - *e.g.* rotation matrix do not scale $$\hat{\imath}$$ or $$\hat{\jmath}$$ so there is no area change, $$\det(M)=1$$
    - *e.g.* scaling matrices do scale $$\hat{\imath}$$ or $$\hat{\jmath}$$ by some factors, $$\det(M)=s_x \times s_y$$
- **the rank of a matrix is the final dimension of the vector space spanned by $$f(\hat{\imath})$$ and $$f(\hat{\jmath})$$**
    - *e.g.* if $$f(\hat{\imath})$$ and $$f(\hat{\jmath})$$ happen to lie on the same line (colinear), the whole 2D plane can't be described by a linear combination of $$f(\hat{\imath})$$ and $$f(\hat{\jmath})$$. The whole 2D plane was squashed onto on single line of 1 dimension, hence it's rank is 1.
- **the kernel $$\ker(M)$$ of a matrix is the linear subspace (plane, line, point) which is mapped to the zero vector $$\vec0$$.**
    - *e.g.* if we again consider a matrix with colinear columns (but different), we know that the plane is crushed to a line in a linear fashion. But if you picture in your head such crushing, is it also obvious that a whole line must be squashed into a single point, the zero vector $$\vec0$$. This line is $$\ker(M)$$. 
 - **The kernel dimension added to the image dimension must be equal to the input dimension.**
    - *e.g.* as we saw before, if the whole plane is flattened to a line, their is also a line that is reduced to the zero vector.
    - *e.g.* if nothing is squashed, the image dimension is equal to input dimension and $$\ker(M)$$ has 0 dimensions.
    - *e.g.* if everything is squashed to a point, the image dimension is equal to 0 and the
    $$\ker(M)$$ dimension is 2 (the whole 2D world).
- **Eigen vectors are vector that do not change direction when transformed.**
    - *e.g.* rotation matrice do not have eigen vectors for $$\theta\neq 0\pmod\pi$$
    - *e.g.* homothety matrices have eigen vectors colinear to input columns.
- **Eigen values are the scaling factor of the vectors that do not change direction in a transformation.**
    - *e.g.* identity matrix has two eigen vectors ($$\hat{\imath}$$ or $$\hat{\jmath}$$), and their eigen values are both $$1$$.

All of this is **spicy**, but let's move on the today's topic: **covariance matrices**.

## **Covariance matrices**
### Variance
Before even talking about co-variance, I need to introduce its friend : **variance**.
Variance is a measure of something varying in function of another. The **variance** defines itself in a rigorous way as the mean of squared differences to the mean. When talking about random variables one can also use the term expectation for the mean, and notate it $$E$$. 

The exact expression of the variance of the random variable $$X$$ is written down below.

$$
\mathbb{V}(X) = \mathbb{E}\left[(X-\mathbb{E}(X))^2\right]
$$

### Co-variance
Co-variance extends the definition of variance to two variables. So instead of measuring the variability of one variable, we want to assess the similarity of variation of two variables. The definiton is straight forward if I develop the variance definition:

$$
\mathbb{V}(X) = \mathbb{E}\left[(X-\mathbb{E}(X))^2\right] = \mathbb{E}\left[(X-\mathbb{E}(X))(X-\mathbb{E}(X))\right]
$$

We are multiplying the difference of $$X$$ to $$\mathbb{E}(X)$$ with itself. If we replace the right part of the expression with another variable, $$Y$$, we obtain the definition of the covariance of $$X$$ and $$Y$$.

$$
\operatorname{cov}(X, Y) = \mathbb{E}\left[(X-\mathbb{E}(X))(Y-\mathbb{E}(Y))\right]
$$

What about covariance matrix ? Well why stay to two variables ? Suppose we have a vector of $$n$$ random variables $$\mathbf{X} = [X_1 \space X_2 \space ... \space X_n]$$, we define the covariance matrix $$\operatorname{K}_\mathbf{XX}$$ of the vector $$\mathbf{X}$$ as:

$$
\operatorname{K}_\mathbf{XX} = \operatorname{cov}(\mathbf{X}, \mathbf{X})
$$

In a more visual way, picture a $$n \times n$$ matrix where each $$(i, j)$$ element contains the value $$\operatorname{cov}(X_i, X_j)$$. 

Why are covariance matrices interesting ? From construction : 
- They are symmetric (or Hermitian) .
- All its eigen values are positive or null.
- All its eigen vectors of different eigen values are orthogonal.

 You might wonder why this is interesting, I will tell you:  from a transformation matrix perspective it's a gem to play with !

### Co-variance matrix as a transformation

First, a matrix that have orthogonal eigen vectors has to be some form of scaling, where each direction is scaled by the corresponding eigen value. The actual directions of this stretching are probably not along our old friends $$\hat{\imath}$$ and $$\hat{\jmath}$$ so $$\operatorname{K}_\mathbf{XX}$$ is an homothety in another base. In order to find that base we can search the eigen vectors of $$\operatorname{K}_\mathbf{XX}$$.

It turns out that for covariance matrices, the eigen vectors are also the direction in which the data demonstrates the largest variances. We can verify this claim by looking at a covariance matrix with uncorrelated variables:

$$ \operatorname{K}_\mathbf{XX} = \begin{bmatrix}
\operatorname{cov}(X_0, X_0) & \operatorname{cov}(X_1, X_0) \\  
\operatorname{cov}(X_0, X_1) & \operatorname{cov}(X_1, X_1) \\
\end{bmatrix}= \begin{bmatrix}
\operatorname{cov}(X_0, X_0) & 0 \\  
0 & \operatorname{cov}(X_1, X_1) \\
\end{bmatrix}
 $$

Because $$X_1$$ and $$X_0$$ are uncorrelated $$\operatorname{cov}(X_0, X_1) = \operatorname{cov}(X_1, X_0) = 0$$. This looks like a scaling matrix, with scaling factors equal to variances of each component.

In the case of correlated variables, the data distribution rotates as well as the eigen vectors of $$\operatorname{K}_\mathbf{XX}$$. This means that we can write :
$$\operatorname{K}_\mathbf{XX}=RSR^{-1}$$
With $R$ a rotation matrix and $$S$$ a scaling matrix. Geometrically, this transformation
- rotates the eigen vectors back to the $$\hat{\imath}$$, $$\hat{\jmath}$$ base : $$R^{-1}$$
- scales the data with eigen value factors : $$S$$
- brings back the scaled data in the original base : $$R$$

It's a simple basis change, but I like visualizing it as chained elementary operations (rotations and scalings etc...). 

Now, any covariance matrix can be understood as a transformation matrix that scales input space in the direction of largest data variances. A lot a techniques, such as PCA, can be understood under this mental model.

### Transforming data
Let's build a toy in order to graps those concepts in a more practical way. In Python and numpy, generate 10000 samples of two random variables drawn from two gaussian distributions. 
- $$X \sim \mathcal{N}(0,\, 1)$$
- $$Y \sim \mathcal{N}(0,\, 9)$$

```python
X = 3*random.randn(10000)
Y = random.randn(10000)
D = vstack([X,Y])
```
We can check that our covariance matrix is diagonal and has both correct variances for $$X$$ and $$Y$$.
```python
cov(D)
> array([[ 8.91611103, -0.02231751],
         [-0.02231751,  1.00330639]])
```
In order to introduce some dependance between $$X$$ and $$Y$$, let's define a rotation $$R$$.
```python
angle = pi/4
R = array([
    [cos(angle), -sin(angle)],
    [sin(angle), cos(angle)]
    ])
```
And apply it to $D$.
```python
RD = R@D
```
We can check the new covariance matrix.
```python
cov(R@D)
> array([[5.03398181, 3.99895494],
         [3.99895494, 4.96912134]])
```
And extract the covariance values and vectors.
```python
values, vectors = linalg.eig(cov(R@D))
```
```python
values
> array([8.91617397, 1.00324344])
```
```python
vectors
> array([[ 0.70909829, -0.70510965],
         [ 0.70510965,  0.70909829]])
```
If all went well, our rotation matrix is supposed to contain our eigen vectors because $$R$$ operates the basis change.
```python
R
> array([[ 0.70710678, -0.70710678],
         [ 0.70710678,  0.70710678]])
```
Without surprise, they are the same (within sample averaging error).

### Conclusion
This little code section concludes this post about transformation and covariances matrices! There is so much more intution to gain here, I hope your curiosity was tickled and you learned something. I can't recommend enough the Essence Of Linear Algebra serie by 3Blue1Brown [(check it out on Youtube)](https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw) that goes over the geometrical interpretation of Linear Algebra concepts in a very visual way.