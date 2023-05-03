function dtb(decimal)
	{
		let binary='';

		while(decimal>0)
			{
				const remainder=decimal%2;
				binary+=remainder;
				decimal=Math.floor(decimal/2);
			}
		return binary.split('').reverse().join('');
	
	}
module.exports=dtb();
