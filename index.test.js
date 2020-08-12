const chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

const testObject = require("./index")

const _testData = {
    RSA:{
        RSAKeys:{
            publicKey:`-----BEGIN RSA PUBLIC KEY-----
            MIIBCgKCAQEAqPosptEGhKGQ6pwhgJqVMHvvSTMIJpOKlOW8GPkLEjDJF9Ay0do/
            uIDBlRs4P5IzdeHhXdM5VI6cL0x3hzliTzaiYfeB0cjFfSsFZHTNA+3mRt3XC9Wj
            G7Oka8bPTub+/+qav/4KmtbjGfOKZOW7DjD475ujT35FtxIo65PriARpsps9b5Ev
            s5kY2soC/cTLtoeLAWYpcGcxF/ajI0Na42bCVK+/uEKqYUgM8naPrPatOixhVRUt
            hkOldwbOvhkweyI5JJl8teEGsX6W3WS60idqTzcdhngYd//a4xRO41TWhAHjXwva
            6r1NkUp21gB6kBYpOisLIDN7K+OaXhzxuQIDAQAB
            -----END RSA PUBLIC KEY-----`,
            privateKey:`-----BEGIN RSA PRIVATE KEY-----
            MIIEoQIBAAKCAQEAqPosptEGhKGQ6pwhgJqVMHvvSTMIJpOKlOW8GPkLEjDJF9Ay
            0do/uIDBlRs4P5IzdeHhXdM5VI6cL0x3hzliTzaiYfeB0cjFfSsFZHTNA+3mRt3X
            C9WjG7Oka8bPTub+/+qav/4KmtbjGfOKZOW7DjD475ujT35FtxIo65PriARpsps9
            b5Evs5kY2soC/cTLtoeLAWYpcGcxF/ajI0Na42bCVK+/uEKqYUgM8naPrPatOixh
            VRUthkOldwbOvhkweyI5JJl8teEGsX6W3WS60idqTzcdhngYd//a4xRO41TWhAHj
            Xwva6r1NkUp21gB6kBYpOisLIDN7K+OaXhzxuQIDAQABAoIBAQCk0C6RHruOzc99
            JX//4ca2HYvNB7thdPLsPA91BCPqQC9DzMxkps0T9nHaL0xzpPQQfJrGWulGMjrg
            X2MOP8hFnvJPP4wdxAfsB/QggVQeCwJaCLJhVqTatiMfBDDbsq7xijAaJ3zMfd/Q
            RhysQO5r7xQ/ELz/Ihh5cXr8G7DVXmo1Z65hjtDPgAcp/kF6LoECWz+8dTKeZ+0/
            uCYwKFECVmHw+AMuCK08qdIAbqIg9iY3aMUJzKsxZdv/d2cYDuaAu9UkukOeDmTR
            z7d7MzlayRgBvj2fcow+TrahN8JwbN6mpjRqh7OB4H8s780VWOD9BUNZrrHVnev9
            5GvBdHsBAoGBAP9bB1JXxqzfIxmF/xVG4P8Ri14OAFEQzwPQMyizl8wH+L31O+yd
            tI4de0+tq1SVUPg0GBjxkylmJ586Gxv/RxQKP1kQh7FMiKe/bvSGCVconMH+HgA+
            HM0H9ubUq8xetj2x3asBHv8C4uCPhjC8zXOa9MB6PuujbOGTlA95deMJAoGBAKln
            V2nXqwoKnI/Nn00wY9azh53+ZDkRoA9TQo+/u9RGb0HqGgK0n5tNZCc4iVD17NIy
            cwlVZVZSQyulcUZX61sJ6VDON//wMILDrrHgYpqX2rIkM9A++fw9379UCyZAu0aN
            9X62tHhaohKqxM1pJyW5M1FJCpHt/Jp19Idu9tUxAoGARMxIr7W4cHD56vGAJUJg
            cjhO3TtWeIDX1YYtkmS4nB71tHAzAfAHalalF3WJ+JL2KrkWWPoVFQ1R1YN5NFTV
            2J9eK+fZNzqQgul/wl+ueo4VleqaOKSDa/YeXlikJL7LyNl4CI+Xw0sKx0fD9rOX
            gvMXyBfnheMU/b2eIYEu8skCf1YGJF2bJz/yI47i3AJWkFx2zmdsx3gzexRNM3/L
            3ZXuLpFKT+sPzf0PT8ya6SAzwg77j28t7kfnfjSrztnpy5pvbguarNVLI1dEB3JM
            f8YBVw0fVTBqyodM5FJEW2UReghaDlBKd1qmq6bPESE+RKLjaSvd64AvWhcVzxb3
            QmECgYAEh7/hG1teqCa5vfvXbArswX8JiCQVz31r6bdUbJa6q+5iPR20b/ctcAGi
            dJMHCrSVDKgF02VdFmi97l52ogAhku8PoKSRUnasPKOGIAZID9oqGHvPQt3s8435
            m8NzFNNZ8ZBFgnpQEs7kCNDG6rDs97B0I3Hma7QwdIttvaN6EA==
            -----END RSA PRIVATE KEY-----`
        },
        RSADecriptedMessage:"test message",
        RSAEncriptedMessage: `H0xiIOAs8oAqAx1peucobBwzrjjF6l08GqYHd7TJtRn4ldLdXHKdvf3PS4+45s8Dzv/Xx0KMWOaYXZGjBlI+nl1ZXvIeEkIKXnyoGLD7SYn8+ElhDcDv0F966qoWjwsjgnrEx4ZUEvZc19seacrc25IchD7eBZK7MYlO9l27MBlvhSaiT8768E5TKg85jC0FQn7RfcgDw5Tj8LoziU8KGGd/D7mLJwvDKebI/cOFWQFtTw75qm0NW50UlsBTeBcOdh+0mSMkDxRNWexgfB+JC7a8NCgQ/k1kxtC46BS15kxbElx+ZbltdnlUSqzeMiepybXRYsXxjOEjPczLfZxewA==`,
        signRSAKey:"7d5af6599d87417968f867b68ba4069a43ce18fd09dcf1c171a0d622bd7b8154153c728349ce20fba74298e0e4d51c4d377e51d52ac3dcb3e6c243c56b6ec9ef4a1b90dc22838847bd34d35e303ef8300ec799957fa1e40a4e608d9cf53bd945ff93ebff13b7e280406bdc64e9a1fda19fd1174fedf762a482e89959b3f6c6e638348029450fddfafb503881d6672ad115b4c50d22002532c4b79db5826bbb01807bbd09587200643b6446b6120dc04f490b90730d137af62b70b7751ddce57b732b014deed4fb63c1087c9257bbb07a78ed6aa9d205e91151b3ebd05a01b7d7a6867bd0fea8d79b58072676625b6f4b1b2ba9c741e87ee3f5e3d491e31697d7"
    },
    SHA:{
        message:"one more test message",
        Sha1:"8778efe0be890cc88496aa41ac5571f45a854152",
        Sha256:"de1b26df3dc24aabc8c1297683318fc261fb7d3ab8de1eaca4e9938c05498b60"
    }  
}


describe('index.js tests', () => {
    describe('RSA - test suite',  () => {
        it('encryptRSA() - with coorect data', () => {
            expect(testObject.encryptRSA(_testData.RSA.RSADecriptedMessage, _testData.RSA.RSAKeys.privateKey)).
            to.equal( _testData.RSA.RSAEncriptedMessage, "Encripted message not eqaul to expected")
        });
        it('decryptRSA() - with coorect data', () => {
            expect(testObject.decryptRSA(_testData.RSA.RSAEncriptedMessage, _testData.RSA.RSAKeys.publicKey)).
            to.equal( _testData.RSA.RSADecriptedMessage, "Decripted message not eqaul to expected")
        });
        it('signRSA() - with coorect data', () => {
            expect(testObject.signRSA(_testData.RSA.RSAEncriptedMessage, _testData.RSA.RSAKeys.privateKey)).
            to.equal( _testData.RSA.signRSAKey, "Result key not eqaul to expected")
        });
    });
    describe('SHA - test suite', () => {
        it('createSha1Digest()', () => {
            expect(testObject.createSha1Digest(_testData.SHA.message)).
            to.equal(_testData.SHA.Sha1, "Result not equal to expected")
        });
        it('createSha256Digest()', () => {
            expect(testObject.createSha256Digest(_testData.SHA.message)).
            to.equal(_testData.SHA.Sha256, "Result not equal to expected")
        });
    });
});
