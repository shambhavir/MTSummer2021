import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: "flex-start"  
        flex: 5,
        padding: 21.5,
        backgroundColor: "#caf7e3",  
        justifyContent: "flex-start" ,
        flexDirection: "column",
        marginTop: 0

    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    // button: {
    //     marginLeft: 30,
    //     marginRight: 30,
    //     marginTop: 20,
    //     height: 48,
    //     borderRadius: 5,
    //     alignItems: "center",
    //     justifyContent: 'center',
    //         borderRadius: 20, width: 160, height: 140, shadowColor: 'black',
    //         shadowOpacity: 0.9, elevation: 5,
    //         backgroundColor: this.state.buttonColor1
    // },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: 'System',
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d',
        fontFamily: 'System'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: 'System'
    },
    loginButtonSection: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
     },
     btnStyle: {
        justifyContent: "center",
        alignSelf: "stretch",
        textAlignVertical: "center"
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: "powderblue"
      }
})