pipeline {
    agent any
    stages {
    stage('PreBuild') {
                steps {
                    nodejs(nodeJSInstallationName: 'Node 6.x', configId: '<config-file-provider-id>') {
                        sh 'npm config ls'
                    }
                }
}
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
