pipeline {
  agent any
  environment {
    CI = 'true'
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }
  stages {
    stage('Install Packages') {
      steps {
        sh '/usr/bin/yarn install'
      }
    }
    stage('Test and Build') {
      parallel {
        stage('Run Tests') {
          steps {
            sh '/usr/bin/yarn run test'
          }
        }
        stage('Create Build Artifacts') {
          steps {
            sh '/usr/bin/yarn run build'
          }
        }
      }
    }
    stage('Deployment') {
      parallel {
        stage('Development') {
          when {
            branch 'development'
          }
          steps {
            withAWS(region: 'eu-west-2', credentials: '439ef7ba-c484-40ff-8d12-207e3a77909b') {
              s3Delete(bucket: 'dev.danielwiltshire.co.uk', path: '**/*')
              s3Upload(bucket: 'dev.danielwiltshire.co.uk', workingDir: 'build', includePathPattern: '**/*')
            }
          }
        }
        stage('Production') {
          when {
            branch 'master'
          }
          steps {
            withAWS(region: 'eu-west-2', credentials: '439ef7ba-c484-40ff-8d12-207e3a77909b') {
              s3Delete(bucket: 'danielwiltshire.co.uk', path: '**/*')
              s3Upload(bucket: 'danielwiltshire.co.uk', workingDir: 'build', includePathPattern: '**/*')
            }
          }
        }
      }
    }
  }
}