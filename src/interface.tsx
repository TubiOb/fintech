export interface HeaderProps {
    scrollToWaitlist?: () => void;
  }

export  interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
  }

export interface HeaderProps {
  scrollToWaitlist?: () => void;
  handleJoinWaitlist: () => void;
}

export interface UserData {
  email: string;
  created: string;
  signedIn: string;
  userUid: string;
}