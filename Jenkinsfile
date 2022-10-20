pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
            echo  'Building ..'
            npm 'install -g @angular/cli@latest'
            npm 'install --save-dev @angular-devkit/build-angular'
            npm 'run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'ls'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'scp dist/angular-keyclock admin@nginxserver:/usr/share/nginx/html'
            }
        }
    }
}
