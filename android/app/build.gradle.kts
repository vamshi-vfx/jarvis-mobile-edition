plugins {
    id("com.android.application")
}

val startUrl = providers.gradleProperty("JARVIS_START_URL")
    .orElse("https://jarvis-mobile-edition-alpha.vercel.app/")

android {
    namespace = "com.growthos.jarvis"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.growthos.jarvis"
        minSdk = 26
        targetSdk = 35
        versionCode = 1
        versionName = "0.1.0"
        buildConfigField("String", "JARVIS_START_URL", "\"${startUrl.get().replace("\\", "\\\\").replace("\"", "\\\"")}\"")
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    buildFeatures { buildConfig = true }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}
