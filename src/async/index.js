const doSomethinAsunc = () =>
{
	return new Promise((resolve, reject) =>
	{
		(true)
			? setTimeout(() => resolve('Do something Async'), 3000)
			: reject(new Error('test Error'))
	});
}

const doSomething = async () =>
{
	const something = await doSomethinAsunc();
	console.log(something);
}

console.log('Before 1');
doSomething();
console.log('Afther 1');

const anotherFunction = async() => {
	try
	{
		const something = await doSomethinAsunc();
		console.log(something);
	} catch (err)
	{
		console.error(err);
	}
}

console.log('Before 2');
anotherFunction();
console.log('Afther 2');
