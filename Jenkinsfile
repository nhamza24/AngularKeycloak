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
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
