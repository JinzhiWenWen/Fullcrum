<template lang='html'>

</template>

<script type="text/javascript">
	import HeaderBalance from '@/components/header-user'
	export default{
		methods:{
			getUserBalance(){



				let ress=getCookie('ress')
		        let httpProvider = "http://testnet.nebula-ai.com:8545";
        		let web3 = new Web3(httpProvider);

				let addr='0x04443827409B356555feF22F76Efb91996f47d3E'
        		// let addr = getCookie('ress')//已知用户的地址 this.address
        		// let pk = this.key 0x1553082796B8e62473E6E8EfE916690ed5736e20
        		let pk = '0x637df8c55817926e7d38ad34dba0b0476a8a914bb61bad0b6760108582d225d6';//用户输入的私钥  this.key
        		let message = "Some data"; //自定义签名信息，随便是什么
        		let signedMessage = web3.eth.accounts.sign('Some data', pk);//签名过后的信息

        		let verifiedSender = web3.eth.accounts.recover(signedMessage);// verifiedSender 应该是addr

        		console.log("签名验证：",verifiedSender.toLowerCase()===addr.toLowerCase());


				const fccoin_ctr_addr = "0x2884f15db1de2e00af1442030bf828ecde470d0c";//合约地址
        		let fccoin_ctr_instance = null;
        		this.$http.get('../../static/json/fc_coin_abi.json').then((response)=>{
        			return response.body;
        		}).then((fccoin_ctr_abi)=>{
        			return new web3.eth.Contract(fccoin_ctr_abi, fccoin_ctr_addr);
        		}).then((fccoin_ctr_instance)=>{
        			return new promise((resolve,reject)=>{
        				return fccoin_ctr_instance

        			})
        		})
        }
	},
	components:{
		HeaderBalance
	}

}
</script>