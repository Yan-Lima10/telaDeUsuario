// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
// import background_image from './assets/background_image.png';

// const UserProfile = () => {
//     const isCurrentUser = true;  // Define se é o perfil do próprio usuário ou de outro
//     const user = {
//         name: 'Guts Zico',
//         bio: 'Amante de tecnologia, viagens e fotografia.',
//         image: require('./assets/IconBerserk.png'),  // Caminho para a imagem de perfil
//         followers: 1200,
//         following: 300,
//         posts: 75
//     };

//     return (
//         <ImageBackground
//         style={styles.backgroundImage}
//         source={background_image}
//         >
//         <SafeAreaView style={styles.container}>
//             <View style={styles.profileHeader}>
//                 <Image source={user.image} style={styles.profileImage} />
//                 <View style={styles.statsContainer}>
//                     {/* <View style={styles.stat}>
//                         <Text style={styles.statNumber}>{user.posts}</Text>
//                         <Text style={styles.statLabel}>Posts</Text>
//                     </View> */}
//                     {/* <View style={styles.stat}>
//                         <Text style={styles.statNumber}>{user.followers}</Text>
//                         <Text style={styles.statLabel}>Seguidores</Text>
//                     </View> */}
//                     {/* <View style={styles.stat}>
//                         <Text style={styles.statNumber}>{user.following}</Text>
//                         <Text style={styles.statLabel}>Seguindo</Text>
//                     </View> */}
//                 </View>
//             </View>
            
//             <View style={styles.profileInfo}>
//                 <Text style={styles.userName}>{user.name}</Text>
//                 <Text style={styles.userBio}>{user.bio}</Text>
//             </View>

//             <TouchableOpacity style={styles.actionButton}>
//                 <Text style={styles.buttonText}>
//                     {isCurrentUser ? 'Editar Perfil' : 'Seguir'}
//                 </Text>
//             </TouchableOpacity>
//         </SafeAreaView>
//         </ImageBackground>
//     );
// };

// const styles = StyleSheet.create({
//     backgroundImage: {
//         flex: 1,
//         resizeMode: "cover",
//         justifyContent: "center",
//       },
    
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         padding: 20,
//         // marginTop: 50,
//     },
//     profileHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     profileImage: {
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//     },
//     statsContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '60%',
//     },
//     stat: {
//         alignItems: 'center',
//     },
//     statNumber: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     statLabel: {
//         fontSize: 14,
//         color: 'gray',
//     },
//     profileInfo: {
//         marginBottom: 20,
//     },
//     userName: {
//         fontSize: 22,
//         fontWeight: 'bold',
//     },
//     userBio: {
//         fontSize: 16,
//         color: 'gray',
//         marginTop: 5,
//     },
//     actionButton: {
//         backgroundColor: '#1E90FF',
//         paddingVertical: 10,
//         alignItems: 'center',
//         borderRadius: 5,
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
// });

// export default UserProfile;

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import background_image from './assets/background_image.png';

const UserProfile = () => {
    const isCurrentUser = true;  // Define se é o perfil do próprio usuário ou de outro
    const user = {
        name: 'Guts Zico',
        bio: 'Amante de tecnologia, viagens e fotografia.',
        image: require('./assets/IconBerserk.png'),  // Caminho para a imagem de perfil
    };

    return (
        <ImageBackground
            style={styles.backgroundImage}
            source={background_image}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.profileHeader}>
                    <Image source={user.image} style={styles.profileImage} />
                    <View style={styles.statsContainer}>
                        {/* Estatísticas podem ser reativadas aqui */}
                    </View>
                </View>
                
                <View style={styles.profileInfo}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.userBio}>{user.bio}</Text>
                </View>

                <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.buttonText}>
                        {isCurrentUser ? 'Publicações' : 'Seguir'}
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%', // Adicionado para garantir que a largura seja 100%
        height: '100%', // Adicionado para garantir que a altura seja 100%
        resizeMode: "cover",
        justifyContent: "center",
    },
    
    container: {
        flex: 1,
        backgroundColor: 'transparent', // Tornar o fundo do container transparente
        padding: 20,
        marginTop: 60,
    },
    profileHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    stat: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 14,
        color: 'gray',
    },
    profileInfo: {
        marginBottom: 20,
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    userBio: {
        fontSize: 16,
        color: 'gray',
        marginTop: 5,
    },
    actionButton: {
        backgroundColor: '#1E90FF',
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default UserProfile;
