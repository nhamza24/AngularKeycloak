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
                 npm 'run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh ' ssh rm -r firstuser@nginxserver:/usr/share/nginx/html'
               sh ' sshpass -p "1234567" scp -r dist/angular-keyclock/* firstuser@nginxserver:/usr/share/nginx/html'
                   }
        }
    }
}
