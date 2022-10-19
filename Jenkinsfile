pipeline {
    agent any
node {
    env.NODEJS_HOME = "${tool 'Node 6.x'}"
    // on linux / mac
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
    // on windows
    env.PATH="${env.NODEJS_HOME};${env.PATH}"
    sh 'npm --version'
}
    stages {
    stage('PreBuild') {
                steps {
                    nodejs(nodeJSInstallationName: 'Node 6.x', configId: '<config-file-provider-id>') {
                        sh 'npm config ls'
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
