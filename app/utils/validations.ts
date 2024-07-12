export function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function setCpfMask(cpf: string){   
    cpf = cpf.replace(/(\d{3})/g, '$1');
    cpf = cpf.replace(/(\d{3})(\d{3})/g, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})/g, '$1$2.$3');
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    return cpf;
  }