pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
               sh 'ls'
                sh 'sudo apt-get install npm && npm run build'
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
