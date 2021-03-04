module.exports = {
	apps: [
		{
			name: 'nuxt-board',
			// package.json에 정의된 npm run start를 실행하게 해서 PM2로 관리하게 한다.
			script: 'npm',
			args: 'run start',
			instances: 1,
			autorestart: true,
			watch: false,
			max_memory_restart: '1G',
			// 개발 환경에서 적용될 설정
			// pm2 start ecosystem.config.js
			env: {
				HOST: '127.0.0.1',
				PORT: 5000,
				NODE_ENV: 'development'
			},
			// 배포 환경에서 적용될 설정
			// pm2 start ecosystem.config.js --env production
			env_production: {
				HOST: '127.0.0.1',
				PORT: 5000,
				NODE_ENV: 'production'
			},
			output: './logs/console.log',
			error: './logs/consoleError.log'
		}
	],

	deploy: {
		production: {
			// sample
			user: 'node',
			host: '127.0.0.1',
			ref: 'origin/master',
			repo: 'git@github.com:repo.git',
			path: '/var/www/production',
			'post-deploy':
				'npm install && pm2 reload ecosystem.config.js --env production'
		}
	}
}
