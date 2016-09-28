(function(){

	angular.module('starter')
	.service('SocketService', ['socketFactory', SocketService]);

	function SocketService(socketFactory){
		return socketFactory({
			
			ioSocket: io.connect('http://10.93.22.97:3000')

		});
	}
})();